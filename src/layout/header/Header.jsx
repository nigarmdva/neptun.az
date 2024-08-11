import React, { useState } from "react";
import searchStyle from "./searchbar.module.css";
import navbarStyle from "./navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { IoSearchSharp } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import { CgShoppingCart } from "react-icons/cg";
import { SlRefresh } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Categories from "../../components/Categories/Categories";
import CategoriesDesk from "../../components/CategoriesDesktop/CategoriesDesk";

const Header = () => {
  const [downList, setDownList] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [catg, openCatg] = useState(false);
  const [isDeskCatgOpen, setIsDeskCatgOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMouseEnter = () => {
    setIsDeskCatgOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDeskCatgOpen(false);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={searchStyle.container}>
        <div className={searchStyle.searchNav}>
          <div style={{ width: "25%" }}>
            <img
              className={searchStyle.st0}
              id={searchStyle.neptun_logo_svg}
              src="./img/neptun.svg"
              alt="Logo"
            />
          </div>
          <div className={searchStyle.inputDiv}>
            <IoSearchSharp style={{ fontSize: "20px", color: "#FF6600" }} />
            <input type="text" placeholder="Məhsulu axtarın" />
            <span className={searchStyle.searchButton}>
              <button>
                <span>Axtar</span>
              </button>
            </span>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className={searchStyle.menuAlt}
          >
            <IoMdMenu />
          </button>
          <div className={searchStyle.phone}>
            <BsFillTelephoneFill className={searchStyle.searchPhone} />
            <span className={searchStyle.searchPhone}>162</span>
          </div>
        </div>
      </div>

      <div className={navbarStyle.container1}>
        <div className={navbarStyle.border}></div>
      </div>
      <div className={navbarStyle.stickyNav}>
        <div className={navbarStyle.navbar}>
          <div className={searchStyle.container}>
            <div className={navbarStyle.navbarItems}>
              <div className={navbarStyle.menus}>
                <BiMenuAltLeft
                  className={navbarStyle.respCatg}
                  style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }}
                  onClick={() => openCatg(!catg)}
                />
                <div
                  className={navbarStyle.deskCatg}
                  style={{ display: "flex", flexDirection: "column" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={navbarStyle.deskItems}>
                    <IoMdMenu
                      style={{
                        fontSize: "30px",
                        color: "#ff8300",
                        cursor: "pointer",
                      }}
                    />
                    <span>Kateqoriyalar</span>
                  </div>
                  {!isHomePage && (
                    <div className={navbarStyle.hoverCatg}>
                      <CategoriesDesk style={{ color: "#000" }} />
                    </div>
                  )}
                </div>
              </div>

              {/* <div className={navbarStyle.magemenu} style={{ display: "none" }}>
              <div>
                <Link to="/">Ana Səhifə</Link>
              </div>
              <div>
                <Link to="/about">Haqqımızda</Link>
              </div>
              <div>
                <Link to="/contact">Aksiyalar</Link>
              </div>
              <div>
                <Link to="/blog">Supermarketlər</Link>
              </div>
              <div>
                <Link to="/news">Karyera</Link>
              </div>
              <div>
                <Link to="/news">Əlaqə</Link>
              </div>
            </div> */}
              <div className={navbarStyle.items}>
                <Link to="/login">
                  <FaLock /> Giriş
                </Link>
                <div className={navbarStyle.hr}></div>
                <span onClick={() => setDownList(!downList)}>
                  <span className={navbarStyle.prof}>Hesabım</span>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul
                    className={`${navbarStyle.list} ${
                      downList ? navbarStyle.visible : ""
                    }`}
                  >
                    <li>
                      <Link to="/account">Hesabım</Link>
                    </li>
                    <li>
                      <Link to="/order-history">Sifariş Tarixçəsi</Link>
                    </li>
                    <li>
                      <Link to="/transactions">Əməliyyatlar</Link>
                    </li>
                    <li>
                      <Link to="/downloads">Yükləmələr</Link>
                    </li>
                    <li>
                      <Link to="/downloads">Sifarişi Rəsmiləşdir</Link>
                    </li>
                  </ul>
                </span>
                <div className={navbarStyle.refresh}>
                  <SlRefresh />
                </div>
                <GrFavorite />
                <CgShoppingCart />
              </div>
              <button
                onClick={() => setOpenNav(!openNav)}
                className={navbarStyle.navOpen}
              >
                <IoMdMenu
                  style={{
                    fontSize: "30px",
                    color: "#FF6600",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        {/* {!isHomePage && ( */}
        <div className={navbarStyle.container1}>
          {!isDeskCatgOpen && !isHomePage && (
            <div className={navbarStyle.border1}></div>
          )}
        </div>
      </div>
      {/* )} */}
      <div>
        <ul
          className={`${navbarStyle.resp} ${
            openNav ? navbarStyle.visible : ""
          }`}
        >
          <span
            className={navbarStyle.close}
            onClick={() => setOpenNav(!openNav)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
          <br />
          <br />
          <li style={{ width: "100%" }}>
            <div
              className={navbarStyle.navUl1}
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <Link>Ana Səhifə</Link>
            </div>
          </li>
          <li>
            <div className={navbarStyle.navUl}>
              <div
                className={navbarStyle.ulRow}
                style={
                  activeSection === "about"
                    ? { borderBottom: "1px solid #ff9300" }
                    : { borderBottom: "1px solid #ddd" }
                }
              >
                <Link>Haqqımızda</Link>
                {activeSection === "about" ? (
                  <FaMinus
                    className={navbarStyle.faminus}
                    onClick={() => toggleSection("about")}
                  />
                ) : (
                  <FaPlus
                    className={navbarStyle.faplus}
                    onClick={() => toggleSection("about")}
                  />
                )}
              </div>
              {activeSection === "about" && (
                <div>
                  <ul className={navbarStyle.nestedUl}>
                    <Link>Siyasətimiz</Link>
                    <Link>Yeniliklər</Link>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className={navbarStyle.navUl}>
              <div
                className={navbarStyle.ulRow}
                style={
                  activeSection === "promotions"
                    ? { borderBottom: "1px solid #ff9300" }
                    : { borderBottom: "1px solid #ddd" }
                }
              >
                <Link>Aksiyalar</Link>
                {activeSection === "promotions" ? (
                  <FaMinus
                    className={navbarStyle.faminus}
                    onClick={() => toggleSection("promotions")}
                  />
                ) : (
                  <FaPlus
                    className={navbarStyle.faplus}
                    onClick={() => toggleSection("promotions")}
                  />
                )}
              </div>
              {activeSection === "promotions" && (
                <div>
                  <ul className={navbarStyle.nestedUl}>
                    <Link>Kampaniyalar</Link>
                    <Link>Neptun Bonus Kart</Link>
                    <Link>Elektron Kataloq</Link>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className={navbarStyle.navUl}>
              <div
                className={navbarStyle.ulRow}
                style={
                  activeSection === "supermarkets"
                    ? { borderBottom: "1px solid #ff9300" }
                    : { borderBottom: "1px solid #ddd" }
                }
              >
                <Link>Supermarketlər</Link>
                {activeSection === "supermarkets" ? (
                  <FaMinus
                    className={navbarStyle.faminus}
                    onClick={() => toggleSection("supermarkets")}
                  />
                ) : (
                  <FaPlus
                    className={navbarStyle.faplus}
                    onClick={() => toggleSection("supermarkets")}
                  />
                )}
              </div>
              {activeSection === "supermarkets" && (
                <div>
                  <ul className={navbarStyle.nestedUl}>
                    <Link>Mağazalarımız</Link>
                    <Link>İrad və Təkliflər</Link>
                    <Link>Alıcıların Nəzərinə</Link>
                    <Link>Partnyorluq</Link>
                    <Link>Tərəfdaşlar</Link>
                    <Link>Supermarketdə reklam</Link>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className={navbarStyle.navUl}>
              <div
                className={navbarStyle.ulRow}
                style={
                  activeSection === "career"
                    ? { borderBottom: "1px solid #ff9300" }
                    : { borderBottom: "1px solid #ddd" }
                }
              >
                <Link>Karyera</Link>
                {activeSection === "career" ? (
                  <FaMinus
                    className={navbarStyle.faminus}
                    onClick={() => toggleSection("career")}
                  />
                ) : (
                  <FaPlus
                    className={navbarStyle.faplus}
                    onClick={() => toggleSection("career")}
                  />
                )}
              </div>
              {activeSection === "career" && (
                <div>
                  <ul className={navbarStyle.nestedUl}>
                    <Link>İşə qəbul proseduru</Link>
                    <Link>Vakansiyalar</Link>
                    <Link>Cv yerləşdirin</Link>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div
              className={navbarStyle.navUl1}
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <Link>Əlaqə</Link>
            </div>
          </li>
        </ul>
      </div>
      <Categories isVisible={catg} />
    </>
  );
};

export default Header;
