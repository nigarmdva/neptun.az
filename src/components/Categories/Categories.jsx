import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import catStyle from "./categories.module.css";

function Categories({ isVisible }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

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
    <div
      className={`${catStyle.menuContainer} ${
        isVisible ? catStyle.visible : ""
      }`}
    >
      {menu.map((item, i) => (
        <div key={i} className={catStyle.menuItem}>
          <div
            className={`${catStyle.menuItemHeader} ${
              openIndex === i ? catStyle.active : ""
            }`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
            {openIndex === i && <FaMinus className={catStyle.minusIcon} />}
          </div>
          <div
            className={`${catStyle.subMenu} ${
              openIndex === i ? catStyle.subMenuVisible : ""
            }`}
          >
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
      ))}
      {/* <Outlet /> */}
    </div>
  );
}

export default Categories;
