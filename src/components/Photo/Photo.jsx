import React from "react";
import photo from "./foto-new.jpg";
import { Avatar } from "./Photo.styled";

export const Photo = () => {
  return (
    <div>
      <Avatar src={photo} alt="avatar" />
    </div>
  );
};
