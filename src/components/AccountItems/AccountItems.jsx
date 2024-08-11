import React from "react";
import { Link } from "react-router-dom";
import styleAccount from "./account.module.css";
import { FaChevronRight } from "react-icons/fa6";
import AccDiv from "../AccDiv/AccDiv";

const AccountItems = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(242,242,242,1)",
          paddingBottom: "40px",
        }}
      >
        <div className={styleAccount.accountContainer}>
          <div className={styleAccount.text}>
            <Link to={"/"}>Ana Səhifə</Link>
            <FaChevronRight style={{ color: "6c6c6c", fontSize: ".8em" }} />
            <Link to={"/account"}>Hesabım</Link>
            <FaChevronRight style={{ color: "6c6c6c", fontSize: ".8em" }} />
            <Link to={"/account"}>Giriş</Link>
          </div>
          <div className={styleAccount.accItems}>
            <div className={styleAccount.new}>
              <h2>Yeni müştəri</h2>
              <span>Hesab qeydiyyatı</span>
              <p>
                Hesab yaradaraq saytın tam funksionallığından istifadə edə
                bilərsiniz
              </p>
              <Link>Davam et</Link>
            </div>
            <div className={styleAccount.new}>
              <h2>Daimi müştəri</h2>
              <span>Mən daimi müştəriyəm</span>
              <span>Email ünvanı</span>
              <input type="text" placeholder="  Email ünvanı" />
              <span>Şifrə</span>
              <input type="text" placeholder="  Şifrə" />
              <p>Şifrənizi unutmusunuz? </p>
              <Link>Giriş</Link>
            </div>
            <AccDiv />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountItems;
