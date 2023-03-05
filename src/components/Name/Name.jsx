import React from "react";
import { NameSurname, NameTitle, Title } from "./Name.styled";

export const Name = () => {
  return (
    <div>
      <Title>It's me!</Title>
      <NameSurname>Farid Suleymanov</NameSurname>
      <NameTitle>Frontend Developer</NameTitle>
    </div>
  );
};
