import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import listStyle from "./list.module.css";
import productStyle from "./product.module.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlRefresh } from "react-icons/sl";
import { IoGrid } from "react-icons/io5";

import RangeSlider from "react-range-slider-input";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-range-slider-input/dist/style.css";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [filtr, setFiltr] = useState(false);
  const { category, subCategory } = useParams();
  const [data, setData] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("");
  const [view, setView] = useState("grid");
  const [activeCatg, setActiveCatg] = useState(null);

  const toggleCatg = (catg) => {
    setActiveCatg(activeCatg === catg ? null : catg);
  };

  useEffect(() => {
    fetchData(1);
  }, [category, subCategory, perPage]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://mirafgan.me/neptun/products?subcategory=${subCategory}&category=${category}&per_page=${perPage}&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const json = await response.json();
      setData(json.data);
      setItems(json.data);
      setPageCount(json.meta.pages);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
    fetchData(selectedPage);
  };

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data.filter(
        (item) => item.subcategoryName === subCategory
      );

      if (filteredData.length > 0) {
        const maxPrice = Math.max(...filteredData.map((item) => item.price));
        const minPrice = Math.min(...filteredData.map((item) => item.price));

        setMinValue(minPrice);
        setMaxValue(maxPrice);
      }
    }
  }, [data, subCategory]);

  const handleInput = (values) => {
    console.log(values);
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleResetFilter = () => {
    if (data.length > 0) {
      const filteredData = data.filter(
        (item) => item.subcategoryName === subCategory
      );

      if (filteredData.length > 0) {
        const maxPrice = Math.max(...filteredData.map((item) => item.price));
        const minPrice = Math.min(...filteredData.map((item) => item.price));

        setMinValue(minPrice);
        setMaxValue(maxPrice);
      }
    }
  };

  const filteredData = data
    .filter((item) => item.subcategoryName === subCategory)
    .filter((item) => item.price >= minValue && item.price <= maxValue)
    .sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handlePerPageChange = (e) => {
    const selectedPerPage = parseInt(e.target.value);
    setPerPage(selectedPerPage);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <>
      <div className={listStyle.listStr}>
        <div className={listStyle.textContainer}>
          <div className={listStyle.listText}>
            <Link to={"/"}>Ana Səhifə</Link>
            <FaChevronRight className={listStyle.listRight} />
            <Link to={"/"}>{category}</Link>
            <FaChevronRight className={listStyle.listRight} />
            <Link to={"/"}>{subCategory}</Link>
          </div>
        </div>
        <div className={listStyle.listContainer}>
          <div className={listStyle.left}>
            <button
              className={listStyle.filtrButton}
              onClick={() => setFiltr(!filtr)}
            >
              <GiHamburgerMenu />
            </button>
            <div
              className={`${listStyle.filter} ${
                filtr ? listStyle.visible : ""
              }`}
            >
              <span
                className={listStyle.closeFiltr}
                onClick={() => setFiltr(!filtr)}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
              <h3 className={listStyle.name}>Filtr</h3>
              <div className={listStyle.alt}>
                <span>Alt Kateqoriya</span>
                <FaChevronRight className={listStyle.fontRight} />
              </div>
              <div>
                {data.map((category) => (
                  <div
                    key={category.id}
                    className={listStyle.category}
                    // onClick={() => setSubCategory(category.name)}
                  >
                    {category.name}
                  </div>
                ))}
                {console.log(data.map((category) => category.name))}
              </div>
              <div className={listStyle.marka}>
                <span>Markası</span>
                <FaChevronRight className={listStyle.fontRight} />
              </div>
              <div className={listStyle.price}>
                <div className={listStyle.priceText}>
                  <span>Qiymət</span>
                  {activeCatg === "price" ? (
                    <FaChevronDown
                      className={listStyle.down}
                      onClick={() => toggleCatg("price")}
                    />
                  ) : (
                    <FaChevronRight
                      className={listStyle.down}
                      onClick={() => toggleCatg("price")}
                    />
                  )}
                </div>

                {activeCatg === "price" && (
                  <div className={listStyle.rangeContainer}>
                    <RangeSlider
                      className={listStyle.rangeSlider}
                      // values={[minValue, maxValue]}
                      // defaultValue={[minValue, maxValue]}
                      onInput={handleInput}
                      step={1}
                      minDistance={10}
                      customClasses="rangeSlider"
                      secondaryBgColor="var(#ff8300)"
                    />
                    <div className={listStyle.rangeValues}>
                      <span>{minValue} AZN</span>
                      <span> {maxValue} AZN</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={listStyle.listCatg}>
                <button
                  className={listStyle.btnfltr}
                  onClick={handleResetFilter}
                >
                  Hamısını sıfırla
                </button>
              </div>
            </div>
            <div className={listStyle.deskList}>
              <h3 className={listStyle.name}>Filtr</h3>
              <div className={listStyle.alt}>
                <span>Alt Kateqoriya</span>
                {activeCatg === "alt" ? (
                  <FaChevronDown
                    className={listStyle.down}
                    onClick={() => toggleCatg("alt")}
                  />
                ) : (
                  <FaChevronRight
                    className={listStyle.down}
                    onClick={() => toggleCatg("alt")}
                  />
                )}
              </div>
              <div className={listStyle.marka}>
                <span>Markası</span>
                {activeCatg === "marka" ? (
                  <FaChevronDown
                    className={listStyle.down}
                    onClick={() => toggleCatg("marka")}
                  />
                ) : (
                  <FaChevronRight
                    className={listStyle.down}
                    onClick={() => toggleCatg("marka")}
                  />
                )}
              </div>
              <div className={listStyle.price}>
                <div className={listStyle.priceText}>
                  <span>Qiymət</span>
                  {activeCatg === "price" ? (
                    <FaChevronDown
                      className={listStyle.down}
                      onClick={() => toggleCatg("price")}
                    />
                  ) : (
                    <FaChevronRight
                      className={listStyle.down}
                      onClick={() => toggleCatg("price")}
                    />
                  )}
                </div>
                {activeCatg === "price" && (
                  <div className={listStyle.rangeContainer}>
                    <RangeSlider
                      className={listStyle.rangeSlider}
                      values={[minValue, maxValue]}
                      defaultValue={[minValue, maxValue]}
                      onInput={handleInput}
                      step={1}
                      minDistance={10}
                      customClasses="rangeSlider"
                      secondaryBgColor="var(#ff8300)"
                    />
                    <div className={listStyle.rangeValues}>
                      <span>{minValue} AZN</span>
                      <span> {maxValue} AZN</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={listStyle.resetDiv}>
                <button
                  className={listStyle.btnfltr}
                  onClick={handleResetFilter}
                >
                  Hamısını sıfırla
                </button>
              </div>
            </div>
          </div>
          <div className={listStyle.right}>
            <div className={listStyle.rightListDiv}>
              <div className={listStyle.grid}>
                <NavLink>
                  <IoGrid
                    onClick={() => handleViewChange("grid")}
                    className={listStyle.colorOrange}
                  />
                </NavLink>
                <NavLink>
                  <GiHamburgerMenu
                    onClick={() => handleViewChange("list")}
                    className={listStyle.colorGray}
                  />
                </NavLink>
              </div>
              {console.log(view)}
              <div className={listStyle.prdElem}>
                <div className={listStyle.pagePer}>
                  <span>Sırala: </span>
                  <select
                    name="sortOption"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="">Əsas</option>
                    <option value="name-asc">Ad(A-Z)</option>
                    <option value="name-desc">Ad(Z-A)</option>
                    <option value="price-asc">Qiymət(aşağıdan yuxarıya)</option>
                    <option value="price-desc">
                      Qiymət(yuxarıdan aşağıya)
                    </option>
                  </select>
                </div>
                <div className={listStyle.pagePer}>
                  <span>Göstər: </span>

                  <select
                    name="perPage"
                    value={perPage}
                    onChange={handlePerPageChange}
                  >
                    <option value="5">5</option>
                    <option value="10" selected="selected">
                      10
                    </option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </div>
                <div className={listStyle.compButton}>
                  <SlRefresh className={listStyle.fontSize} />
                  <Link to={""}>Müqayisə et</Link>
                </div>
              </div>
            </div>

            <div
              className={
                view === "grid" ? productStyle.prGrid : productStyle.prList
              }
            >
              {filteredData.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))}

              {filteredData.length === 0 && (
                <h1 className={listStyle.noProduct}>
                  Heç bir məhsul tapılmadı.
                </h1>
              )}
            </div>

            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              previousClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
