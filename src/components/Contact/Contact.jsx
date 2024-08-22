import React from "react";
import { Link } from "react-router-dom";
import styleContact from "./contact.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styleContact.backContact}>
      <div className={styleContact.container}>
        <div className={styleContact.contact}>
          <div className={styleContact.text}>
            <Link to={"/"}>Ana Səhifə</Link>
            <FaChevronRight className={styleContact.rightIcon} />
            <Link to={"/account"}>Əlaqə</Link>
          </div>

          <div className={styleContact.contactDiv}>
            <div className={styleContact.map}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1jGglul00JBwAusg1TLh9cnylYY1AS3Rx"
                allowfullscreen
                loading="lazy"
                width="100%"
                height="510vh"
              ></iframe>
            </div>
            <div className={styleContact.contactItems}>
              <div className={styleContact.location}>
                <FaMapLocationDot className={styleContact.locationIcon} />
                <div className={styleContact.locationText}>
                  <span>Baş ofis:</span>
                  <span>Bakı ş., Nəsimi r-nu, Tbilisi pr.1058</span>
                </div>
              </div>
              <div className={styleContact.phone}>
                <MdOutlinePhoneCallback className={styleContact.phoneIcon} />
                <div className={styleContact.phoneText}>
                  <span className={styleContact.hover}>162</span>
                  <span> | </span>
                  <span className={styleContact.hover}>+994 55 555 55 55</span>
                </div>
              </div>
              <div className={styleContact.mail}>
                <MdMailOutline className={styleContact.mailIcon} />
                <div className={styleContact.mailText}>
                  <span className={styleContact.hover}>info@neptunaz.com</span>
                </div>
              </div>
              <div className={styleContact.inputs}>
                <input type="text" placeholder="Adınız" />
                <input type="text" placeholder="Email ünvanınız" />
                <textarea placeholder="Sual və ya ismarıcınız"></textarea>
              </div>
              <button>Təsdiqlə</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
