import React from "react";
import "../style/register.scss";
import Img from "../images/left.png";
import logo from "../images/logo.png";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto from "crypto-js";
import { useState } from "react";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={Img} alt="lefts" />
        </div>
        <div className="register_content">
          <div className="boss">
            <h1>Create Your Account.</h1>
            <p>Already have Account?</p>
            <Link to="/">Sign in</Link>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>
            <div>
              <input type="text" placeholder="Re-enter-Password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}