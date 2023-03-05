import React from "react";
import {
  CopyrigthStyle,
  CopyrigthText,
  FooterIcons,
  FooterStyle,
} from "./Footer.styled";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./footer.css";

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterIcons>
        <IconContext.Provider
          value={{ color: "teal", size: "40", className: "react-icons-footer" }}
        >
          <GrReactjs />
          <IoLogoJavascript />
          <SiTypescript />
          <SiAngular />
        </IconContext.Provider>
      </FooterIcons>
      <CopyrigthStyle>
        <IconContext.Provider
          value={{
            color: "teal",
            size: "20",
            className: "react-icons-copyright",
          }}
        >
          <FaCopyright />
        </IconContext.Provider>
        <CopyrigthText>Developed by Farid Suleymanov</CopyrigthText>
      </CopyrigthStyle>
    </FooterStyle>
  );
};
