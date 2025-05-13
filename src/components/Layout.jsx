import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout = () => {
  return (

    <div style={{ background: "radial-gradient(circle at top, #2a0e61, #000000)", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <Outlet />
    </div>
  );
};
