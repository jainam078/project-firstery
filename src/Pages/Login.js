import React from "react";
import logo from "../../src/assets/fc_logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column p-1 m-5 justify-content-start align-items-start login-container">
          <div className="d-flex w-100 justify-content-center">
            <img src={logo}></img>
          </div>
          <h5 className="mt-5">Login / Register</h5>
          <h6 className="mt-3">Email ID/Mobile No.</h6>
          <input
            placeholder="Enter your Email ID or Mobile No."
            className="w-100 login-input"
          />
          <button className="mt-5 w-100 continue-button rounded p-2">
            CONTINUE
          </button>
          <div className="w-100 mt-2 d-flex justify-content-center">
            <div className="border-top w-50 mt-2"></div>
            <p className="font-weight-bold"> &nbsp; OR &nbsp;&nbsp; </p>
            <div className="border-top w-50 mt-2"></div>
          </div>

          <button className="w-100 p-2 bg-white border d-flex justify-content-center align-items-center">
            <AiFillFacebook size={30} color="blue" className="mx-2" />
            FACEBOOK
          </button>
          <button className="w-100 mt-2 p-2 bg-white border d-flex justify-content-center align-items-center">
            <FcGoogle size={30} className="mx-2" />
            GOOGLE
          </button>

          <div className="p-4 w-100 d-flex justify-content-center">
            <Link to="" className="text-decoration-none font-weight-bold">
              New to FirstCry? Register Here
            </Link>
          </div>

          <hr className="w-100" />
          <span>
            By continue you agree to Fristcry's <Link>Conditions of Use</Link>
            &nbsp; and <Link className="d-inline-block">Privacy Notice</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
