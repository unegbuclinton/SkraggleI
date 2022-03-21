import React from "react";
import { Navlinks, NavWrapper } from "./styles";

const Nav = ({ className, activeClassName, links, ...rest }) => {
  return (
    <NavWrapper>
      {links.map(({ path, label, exact }) => (
        <Navlinks key={label} to={path} exact={exact} activeClassName="active">
          {label}
        </Navlinks>
      ))}
    </NavWrapper>
  );
};

export default Nav;
