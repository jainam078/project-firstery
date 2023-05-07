import React from "react";
import "./mainheader.css";
import { Link } from "react-router-dom";
import logo from "../../src/assets/fc_logo.png";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

const MainHeader = () => {
  return (
    <div>
      <div className="px-5 py-4 w-100 d-flex align-items-center justify-content-between ">
        <div className="d-flex justify-content-center">
          <div>
            <Link to="/">
              <img className="logo1" src={logo} alt="img" />
            </Link>
          </div>
          <div className="mx-3 rounded">
            {/* <Searchinput /> */}
            <input className="w-100 border rounded" />
          </div>
        </div>

        <div className="linkcontainer ">
          <Link to={`/account`} className="d-flex text-decoration-none">
            <CiLocationOn color="black" />
            <p className="text-secondary">Select Location |&nbsp;</p>
          </Link>
          <Link to={`/account`} className="text-decoration-none">
            <p className="text-secondary"> Stores & Preschools |&nbsp;</p>
          </Link>
          <Link to={`/account`} className="text-decoration-none">
            <p className="text-secondary">Support |&nbsp;</p>
          </Link>
          <Link to={`/account`} className="text-decoration-none">
            <p className="text-secondary">Track Order |&nbsp;</p>
          </Link>
          <Link to={`/account`} className="text-decoration-none">
            <p className="text-secondary">Frist Cry Parenting |&nbsp;</p>
          </Link>

          {/* <Adminlogin /> */}
          <Link to={"/login"} className="text-decoration-none">
            <p className="text-secondary">Login /Register |&nbsp;</p>
          </Link>

          <Link to={"/cart"} className="d-flex text-decoration-none">
            <AiOutlineHeart color="black" size={20} />
            <p className="text-secondary mx-1">ShortList |</p>
          </Link>
          <Link to={"/cart"} className="d-flex text-decoration-none">
            <CgShoppingCart color="black" size={20} />
            <p className="text-secondary mx-1">Cart</p>
          </Link>
          {/* <Icon className="IC" fontSize="20px">
            <BsFillCartFill />
          </Icon> */}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
