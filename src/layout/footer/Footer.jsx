import React, { useState } from "react";
import footStyle from "./footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxTriangleRight } from "react-icons/rx";

const Footer = () => {
  const [more, setMore] = useState(false);

  return (
    <>
      <div
        className={footStyle.footer}
        style={more ? { height: "150vh" } : { height: "auto" }}
      >
        <div className={footStyle.container}>
          <div className={footStyle.inner}>
            <div className={footStyle.info}>
              <img src="/img/delivery.svg" alt="Delivery" />
              <span>Pulsuz Çatdırılma</span>
              <span>50 AZN-dən yuxarı</span>
            </div>
            <div className={footStyle.info}>
              <img src="/img/cash.svg" alt="Cash" />
              <span>Nağd və ya</span>
              <span>Kartla ödəniş</span>
            </div>
            <div className={footStyle.info}>
              <img src="/img/gift.svg" alt="Gift" />
              <span>Hədiyyə</span>
              <span>Kuponları</span>
            </div>
            <div className={footStyle.info2}>
              <img src="/img/online.svg" alt="Online" />
              <span>Onlayn</span>
              <span>Müştəri xidmətləri</span>
            </div>
            <div className={footStyle.info2}>
              <img src="/img/mobile.svg" alt="Mobile" />
              <span>Sürətli</span>
              <span>Mobil mağaza</span>
            </div>
          </div>
          <div className={footStyle.newsletter}>
            <p>Bizə abunə olun</p>
            <div className={footStyle.inputbox}>
              <input type="text" placeholder="e-poçt ünvanınız..." />
              <button>Abunə ol</button>
            </div>
          </div>
          <div className={footStyle.newsletter}>
            <p>Sizə xəbərdarlıq üçün</p>
            <div className={footStyle.phone}>
              <select className={footStyle.selector}>
                <option value="">---</option>
                <option value="050">050</option>
                <option value="051">051</option>
                <option value="055">055</option>
                <option value="070">070</option>
                <option value="077">077</option>
              </select>
              <div className={footStyle.inputbox}>
                <input type="text" placeholder="XXX YY ZZ " />
                <button>Abunə ol</button>
              </div>
            </div>
          </div>
          <div className={footStyle.networks}>
            <p>Bizi izləyin</p>
            <div className={footStyle.socials}>
              <span className={footStyle.sntw}>
                <FaFacebookF />
              </span>
              <span className={footStyle.sntw}>
                <FaInstagram />
              </span>
              <span className={footStyle.sntw}>
                <FaYoutube />
              </span>
              <span className={footStyle.sntw}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className={`${footStyle.footUl} ${more ? footStyle.show : ""}`}>
            <ul>
              <li>
                <RxTriangleRight />
                <Link to="/about">Haqqımızda</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/policy">Siyasətimiz</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/news">Yeniliklər</Link>
              </li>
            </ul>
            <ul>
              <li>
                <RxTriangleRight />
                <Link to="/campaigns">Aksiyalar</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/campaigns">Kampaniyalar</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/neptun-bonus-card">Neptun bonus kart</Link>
              </li>
            </ul>
            <ul>
              <li>
                <RxTriangleRight />
                <Link to="/stores">Mağazalarımız</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/feedback">İrad və Təkliflər</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/buyer-info">Alıcıların nəzərinə</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/partnership">Partnyorluq</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/advertising">Supermarketdə reklam</Link>
              </li>
            </ul>
            <ul>
              <li>
                <RxTriangleRight />
                <Link to="/careers">Karyera</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/hiring-process">İşə qəbul prosseduru</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/vacancies">Vakansiyalar</Link>
              </li>
              <li>
                <RxTriangleRight />
                <Link to="/submit-cv">CV yerləşdirin</Link>
              </li>
            </ul>
          </div>
          <Link className={footStyle.more} onClick={() => setMore(!more)}>
            {more ? "Bağla" : "Daha çox"}
          </Link>{" "}
          <br />
          <span className={footStyle.rights}>
            {" "}
            © 2003 - 2023 Neptun Supermarket. All rights reserved{" "}
          </span>
        </div>
      </div>
      <div className={footStyle.foot}>
        <img src="/img/visalogo.svg" alt="Visa" />
      </div>
    </>
  );
};

export default Footer;
