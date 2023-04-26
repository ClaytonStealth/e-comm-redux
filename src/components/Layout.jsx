import React from "react";
import { checkAuthToken } from "../lib/checkAuthToken";
import { Outlet, Navigate } from "react-router-dom";
import AppBar from "./AppBar";

const Layout = () => {
  let auth = checkAuthToken();
  return (
    <>
      <AppBar />
      {auth ? <Outlet /> : <Navigate to='/login' />}
    </>
  );
};

export default Layout;
