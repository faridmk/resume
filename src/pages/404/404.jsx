import React from "react";
import { ErrorDescription, ErrorPage, ErrorPageStyle } from "./404.styled";

export const NotFound = () => {
  return (
    <ErrorPageStyle>
      <ErrorPage>PAGE NOT FOUND</ErrorPage>
      <ErrorDescription>404 error page</ErrorDescription>
    </ErrorPageStyle>
  );
};
