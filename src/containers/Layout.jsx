import React from "react";
import Header from '@components/Headers';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
