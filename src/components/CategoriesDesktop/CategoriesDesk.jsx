import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import catStyle from "./catgdesk.module.css";

function CategoriesDesk({ isVisible }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(import.meta.env.VITE_API_CATALOG_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMenu(json);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={catStyle.menuContainer}>
      {menu.map((item, i) => (
        <div key={i} className={catStyle.menuItem}>
          <div className={catStyle.hoverMenu}>
            <div className={catStyle.menuItemHeader}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </div>
            <FaAngleRight style={{ fontSize: "0.5em" }} />
            <div className={catStyle.subMenu}>
              {item.submenu &&
                item.submenu.map((a, index) => (
                  <NavLink
                    key={index}
                    to={`/${a.slug}`}
                    className={catStyle.subMenuItem}
                  >
                    {a.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className={catStyle.menuBorder}></div>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default CategoriesDesk;
