import React from "react";
import { Contacts } from "../Contacts/Contacts";
import { Name } from "../Name/Name";
import { Photo } from "../Photo/Photo";
import { HeaderStyle } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyle>
      <Name />
      <Photo />
      <Contacts />
    </HeaderStyle>
  );
};
