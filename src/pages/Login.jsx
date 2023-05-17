import React from "react";
import "../style/login.scss";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CryptoJS from "crypto-js";
import LoginComponents from "../components/LoginComponents";
export default function Login() {
  return (
    <>
      <LoginComponents />
    </>
  );
}
