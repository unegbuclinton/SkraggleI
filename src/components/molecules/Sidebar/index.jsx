import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContent } from 'utilities/SidebarContent';
import LogoComponent from '../LogoComponent';
import { SidebarContainer, SidebarLinksWrapper, SideNavLinkText } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar__logo">
        <LogoComponent light />
      </div>
      <SidebarLinksWrapper>
        <SideNavLinkText>Main Menu</SideNavLinkText>
        {SidebarContent.map(({ route, icon, text }) => {
          return (
            <NavLink
              key={Math.random()}
              to={route}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--selected' : ''}`}
            >
              <span>{icon}</span> <SideNavLinkText>{text}</SideNavLinkText>
            </NavLink>
          );
        })}
      </SidebarLinksWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
