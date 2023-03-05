import React from "react";
import { Li, Ul } from "./Contacts.styled";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <Ul>
      <Li>
        <IconContext.Provider
          value={{ color: "#086FC1 ", className: "react-icons" }}
        >
          <BsLinkedin />
        </IconContext.Provider>
        <a
          href="https://www.linkedin.com/in/farid-suleymanov/"
          target="blank"
          className="link-style"
        >
          LinkedIn
        </a>
      </Li>
      <Li>
        <IconContext.Provider
          value={{ color: "red", className: "react-icons" }}
        >
          <MdEmail />
        </IconContext.Provider>
        <a
          href="mailto:farid.sul20@gmail.com"
          target="blank"
          className="link-style"
        >
          farid.sul20@gmail.com
        </a>
      </Li>
      <Li>
        <IconContext.Provider
          value={{ color: "#0B94DD ", className: "react-icons" }}
        >
          <FaTelegram />
        </IconContext.Provider>
        <a href="https://t.me/farik_2022" target="blank" className="link-style">
          Telegram
        </a>
      </Li>
    </Ul>
  );
};
