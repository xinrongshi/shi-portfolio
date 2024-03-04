"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import { Navbar, Page } from "@components/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  return (
    <html lang="en">
      <head />
      <body>
        <title>This is Xinrong Shi</title>
        <Navbar/>
        <Page/>
        {children}
      </body>
    </html>
  );
};

export default Layout;
