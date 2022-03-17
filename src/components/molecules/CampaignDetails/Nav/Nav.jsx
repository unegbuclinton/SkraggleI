import React from "react";
import { NavWrapper } from "./styles";
import { NavLink } from "react-router-dom";

const Nav = ({ children, className, activeClassName, ...rest }) => {
  const links = [
    {
      path: "/overview",
      label: "Overview",
      exact: "true",
    },
    {
      path: "/form",
      label: "Form",
      exact: "true",
    },
    {
      path: "/p2p",
      label: "P2P",
      exact: "true",
    },
    {
      path: "/elements",
      label: "Elements",
      exact: "true",
    },
    {
      path: "/events",
      label: "Events",
      exact: "true",
    },
    {
      path: "/landing-page",
      label: "Landing Page",
      exact: "true",
    },
    {
      path: "/mail-blasts",
      label: "Mail Blasts",
      exact: "true",
    },
  ];
  
  return (
    <div>
      <NavWrapper>
        {links.map(({ path, label, exact }) => (  
            <NavLink
            key={label} 
            to={path}
            exact={exact}
            activeClassName="active"
            >
              {label}
            </NavLink>
        ))}
      </NavWrapper>
    </div>

  );
};

export default Nav;
