"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import { Navbar, Content } from "@components/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="relative">
          <title>This is Xinrong Shi</title>
          <Navbar />
          <Content />
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
