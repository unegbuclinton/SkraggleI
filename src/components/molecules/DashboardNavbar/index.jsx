import { logoutUser } from 'features/auth/authSlice';
import { DPIconLogout, DPIconMenuDrop, DPIconProfile, DPIconSetting } from 'icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import {
  Header,
  HeaderLeftContent,
  HeaderLinks,
  HeaderRightContent,
  UserMenuLinkText
} from './styles';

function DashboardHeader({ pageLinks }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const userLogout = () => {
    dispatch(logoutUser()).then(() => persistStore.purgue());
  };
  const menuContent = [
    {
      route: '/contacts',
      icon: <DPIconProfile />,
      text: 'Profile',
      onClickFunc: () => {}
    },
    {
      route: '/contacts',
      icon: <DPIconSetting />,
      text: 'Settings',
      onClickFunc: () => {}
    },
    {
      route: '/contacts',
      icon: <DPIconLogout />,
      text: 'Logout',
      onClickFunc: () => {
        userLogout;
      }
    }
  ];

  return (
    <Header>
      <div className="header__first-row">
        <HeaderLeftContent>
          <h2 className="header__company-name">Company Name</h2>
          <HeaderLinks>
            <Link className="header__links" to="/contacts">
              Contact Us
            </Link>
            <Link className="header__links" to="/contacts">
              Support
            </Link>
          </HeaderLinks>
        </HeaderLeftContent>
        <HeaderRightContent open={open}>
          <div className="user-info">
            <p className="user-info__project-name">BigGorilla Sandbol</p>
            <p className="user-info__user-name">Mohammad Adaam</p>
          </div>
          <div className="user-dropdown">
            <span onClick={toggleMenu}>
              <DPIconMenuDrop />
            </span>
          </div>
          <div className="user-menu">
            {menuContent?.map(({ icon, text, route, onClickFunc }) => (
              <Link
                onClick={onClickFunc}
                className="user-menu__links"
                to={route}
                key={Math.random()}>
                <span>{icon}</span>
                <UserMenuLinkText>{text}</UserMenuLinkText>
              </Link>
            ))}
            {/* <Link className="user-menu__links" to="/contacts">
              <span>
                <DPIconProfile />
              </span>
              <UserMenuLinkText> Profile</UserMenuLinkText>
            </Link>
            <Link className="user-menu__links" to="/contacts">
              <span>
                <DPIconSetting />
              </span>
              <UserMenuLinkText> Settings</UserMenuLinkText>
            </Link>
            <Link className="user-menu__links" to="/contacts" onClick={userLogout}>
              <span>
                <DPIconLogout />
              </span>
              <UserMenuLinkText> Logout</UserMenuLinkText>
            </Link> */}
          </div>
        </HeaderRightContent>
      </div>
      <div className="header__second-row">{pageLinks}</div>
    </Header>
  );
}

export default DashboardHeader;
