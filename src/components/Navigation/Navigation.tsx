import React from "react";

import { Link } from "react-router-dom";

export interface NavigationAttributes {}
type NavigationProps = NavigationAttributes;

const Navigation = (props: NavigationProps) => {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="settings"> Settings </Link>
    </div>
  );
};

export default Navigation;
