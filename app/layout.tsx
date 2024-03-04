import React, { ReactNode } from "react";
import "./globals.css";
import { SideBar, Page } from "@components/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <title>This is Xinrong Shi</title>
        <SideBar/>
        <Page/>
        {children}
      </body>
    </html>
  );
};

export default Layout;
