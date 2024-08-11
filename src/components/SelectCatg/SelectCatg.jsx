import selectStyle from "./select.module.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SelectCatg() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMenu(json.menu);
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
    <>
      <div className={selectStyle.SelectCatg}>
        {menu.map((item, i) => (
          <NavLink key={i} to={item.url} className={selectStyle.selectItem}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default SelectCatg;
