import React from "react";
import "../style/register.scss";
import main from "../images/right.png";
import Img from "../images/left.png";



export default function Register() {
  return (
    <>
      <div className="container">
      <div className="left">
        <img src={Img} alt="left" />
      </div>

        <div className="login_content">
          <div className="boss">
            <img src={main} alt="right" />
            <b className="create-your-account">Create Your Account</b>
            <p className="search_password">Already have account?</p>
            <p className="search_password">Sign in</p>
            <div className="name_input">
              <input type="name" placeholder="Name" />
            </div>
            <div className="nickname_input">
              <input type="nickname" placeholder="Nickname" />
            </div>
            <div className="phone_input ">
              <input type="Phone" placeholder="Phone" />
            </div>
            <div className="email_input ">
              <input type="email" placeholder="Email" />
            </div>
            <button className="login_btn">
              Click
            </button>
            

            <div className="password_input">
              <input
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="reenterpassword_input ">
              <input type="re-enter password" placeholder="Re-enter password" />
            </div>
            
            <div>
              <button className="register_btn">
      
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
