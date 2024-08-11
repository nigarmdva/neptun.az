import React from "react";
import { Link } from "react-router-dom";
import styleAcc from "./accdiv.module.css";
const AccDiv = () => {
  return (
    <>
      <div className={styleAcc.acc}>
        <div className={styleAcc.accText}>
          <span>Hesab</span>
        </div>
        <div className={styleAcc.accList}>
          <ul>
            <li>
              <Link to={""}>Giriş</Link> / <Link to={""}>Qeydiyyat</Link>
            </li>
            <li>
              <Link to={""}>Şifrənizi unutmusunuz?</Link>
            </li>
            <li>
              <Link to={""}>Hesabım</Link>
            </li>
            <li>
              <Link to={""}>Ünvan kitabçası</Link>
            </li>
            <li>
              <Link to={""}>Arzu siyahısı</Link>
            </li>
            <li>
              <Link to={""}>Sifariş tarıxçəsi</Link>
            </li>
            <li>
              <Link to={""}>Təkrarlanan ödəmələr</Link>
            </li>
            <li>
              <Link to={""}>Bonus xalları</Link>
            </li>
            <li>
              <Link to={""}>Geri qaytarma</Link>
            </li>
            <li>
              <Link to={""}>Əməliyyatlar</Link>
            </li>
            <li>
              <Link to={""}>Xəbər bülteni</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccDiv;
