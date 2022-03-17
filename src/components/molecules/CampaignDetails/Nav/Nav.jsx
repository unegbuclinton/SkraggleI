import React from "react";
import { Navlinks, NavWrapper } from "./styles";


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
    <NavWrapper>
        {links.map(({ path, label, exact }) => (  
            <Navlinks
            key={label} 
            to={path}
            exact={exact}
            activeClassName="active"
            >
              {label}
            </Navlinks>
        ))}
      
    </NavWrapper>

  );
};

export default Nav;
