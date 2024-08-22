import React, { useEffect, useRef, useState } from "react";
import searchStyle from "./searchbar.module.css";
import navbarStyle from "./navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { IoSearchSharp } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { SlRefresh } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Categories from "../../components/Categories/Categories";
import CategoriesDesk from "../../components/CategoriesDesktop/CategoriesDesk";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { GrFavorite } from "react-icons/gr";

const Header = ({ categories }) => {
  const [downList, setDownList] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [catg, openCatg] = useState(false);
  const [isDeskCatgOpen, setIsDeskCatgOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();
  document.addEventListener("scroll", () => {
    if (scrollY > 682) setIsSticky(true);
    else setIsSticky(false);
  });

  const handleMouseEnter = () => {
    setIsDeskCatgOpen(true);
    openCatg(true);
  };

  const handleMouseLeave = () => {
    setIsDeskCatgOpen(false);
    openCatg(false);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { products } = useSelector((store) => store.basket);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    navigate("/cart");
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  let catgRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!catgRef.current.contains(e.target)) {
        openCatg(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 0) {
      const results = categories.filter((category) =>
        category.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
    console.log(term);
  };
  return (
    <>
      <div className={searchStyle.container}>
        <div className={searchStyle.searchNav}>
          <div className={searchStyle.searchImg}>
            <Link to="/">
              <img
                className={searchStyle.st0}
                src="/img/neptun.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className={searchStyle.inputDiv}>
            <IoSearchSharp style={{ fontSize: "20px", color: "#FF6600" }} />
            <input
              type="text"
              placeholder="Məhsulu axtarın"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className={searchStyle.searchButton}>
              <button>
                <span>Axtar</span>
              </button>
            </span>
            {filteredResults.length > 0 && (
              <div className={searchStyle.filterResults}>
                <ul>
                  {filteredResults.map((result) => (
                    <li key={result.id}>
                      <Link to={`/category/${result.slug}`}>{result.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
        <div className={navbarStyle.border1}></div>
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
              <div className={navbarStyle.megaMenu}>
                <Link to="/">
                  <span>Ana Səhifə</span>
                </Link>

                <span className={navbarStyle.dropdown}>
                  <Link className={navbarStyle.prof}>Haqqımızda</Link>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul className={navbarStyle.list}>
                    <li>
                      <Link to="/account">Siyasətimiz</Link>
                    </li>
                    <li>
                      <Link to="/order-history">Yeniliklər</Link>
                    </li>
                  </ul>
                </span>

                <span className={navbarStyle.dropdown}>
                  <span className={navbarStyle.prof}>Aksiyalar</span>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul className={navbarStyle.list}>
                    <li>
                      <Link to="/account">Kampaniyalar</Link>
                    </li>
                    <li>
                      <Link to="/order-history">Neptun Bonus Kart</Link>
                    </li>
                    <li>
                      <Link to="/transactions">Elektron Kataloq</Link>
                    </li>
                  </ul>
                </span>

                <span className={navbarStyle.dropdown}>
                  <span className={navbarStyle.prof}>Supermarketlər</span>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul className={navbarStyle.list}>
                    <li>
                      <Link to="/account">Mağazalarımız</Link>
                    </li>
                    <li>
                      <Link to="/order-history">İrad və Təkliflər</Link>
                    </li>
                    <li>
                      <Link to="/transactions">Alıcıların Nəzərinə </Link>
                    </li>
                    <li>
                      <Link to="/downloads">Partnyorluq</Link>
                    </li>
                    <li>
                      <Link to="/downloads">Tərəfdaşlar</Link>
                    </li>
                  </ul>
                </span>

                <span className={navbarStyle.dropdown}>
                  <span className={navbarStyle.prof}>Karyera</span>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul className={navbarStyle.list}>
                    <li>
                      <Link to="/account">İşə qəbul proseduru</Link>
                    </li>
                    <li>
                      <Link to="/order-history">Vakansiyalar</Link>
                    </li>
                    <li>
                      <Link to="/transactions">Cv yerləşdirin</Link>
                    </li>
                  </ul>
                </span>

                <Link to="/contact">
                  <span>Əlaqə</span>
                </Link>
              </div>

              <div className={navbarStyle.items}>
                <Link to="/account">
                  <FaLock /> Giriş
                </Link>
                <div className={navbarStyle.hr}></div>
                <span className={navbarStyle.dropdown}>
                  <span className={navbarStyle.prof}>Hesabım</span>
                  <RxTriangleDown className={navbarStyle.down} />
                  <ul className={navbarStyle.list}>
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
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    color: "currentColor",
                    transition: "color 0.3s ease",
                  }}
                >
                  {hovered ? (
                    <Link to="/wish-list">
                      <MdFavorite
                        style={{
                          transition: "fill 0.3s ease",
                        }}
                      />
                    </Link>
                  ) : (
                    <Link to="/wish-list">
                      <MdFavoriteBorder
                        style={{
                          transition: "fill 0.3s ease",
                        }}
                      />
                    </Link>
                  )}
                </div>
                <Badge
                  onClick={handleClick}
                  badgeContent={products.length}
                  color="error"
                >
                  <CgShoppingCart style={{ cursor: "pointer" }} />
                </Badge>
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
        <div className={navbarStyle.container1}>
          {!isHomePage && (
            <div
              className={navbarStyle.border2}
              style={{ display: catg ? "none" : "block" }}
            ></div>
          )}
        </div>
      </div>
      <div ref={menuRef}>
        <ul
          className={`${navbarStyle.resp} ${
            openNav ? navbarStyle.visibleResp : ""
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
              <Link to={"/"}>Ana Səhifə</Link>
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
              <Link to={"/contact"}>Əlaqə</Link>
            </div>
          </li>
        </ul>
      </div>
      <Categories isVisible={catg} />
    </>
  );
};

export default Header;
