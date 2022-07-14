/* eslint-disable no-unused-vars */
import apiInstance from 'apiInstance';
import { logoutUser } from 'features/auth/authSlice';
import { userInfo } from 'features/contact/contactSlice';
import {
  DPIconLogout,
  DPIconMenuDrop,
  DPIconOrganisationIcon,
  DPIconProfile,
  DPIconProfileImage
} from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from 'store';
import { generateUUID } from 'utilities/helpers';
import {
  Header,
  HeaderLeftContent,
  HeaderLinks,
  HeaderRightContent,
  UserMenuLinkText
} from './styles';

function DashboardHeader({ pageLinks }) {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  const menuContent = [
    {
      route: '/contacts',
      icon: <DPIconProfile />,
      text: 'Profile',
      onClickFunc: () => {}
    },
    {
      route: '/login',
      icon: <DPIconLogout />,
      text: 'Logout',
      onClickFunc: () => {
        userLogout();
      }
    }
  ];
  const toggleMenu = () => setOpen((prev) => !prev);
  const userLogout = () => {
    dispatch(logoutUser());
  };
  const userData = token?.profile;
  const id = userData?.id;
  const userName = `${userData?.first_name}  ${userData?.last_name}`;

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
        <DPIconProfileImage className="header__first-image" />
        <HeaderRightContent open={open} onClick={toggleMenu} ref={ref}>
          <div className="title">
            <div className="user-info">
              <p className="user-info__project-name">BigGorilla Sandbol</p>
              <p className="user-info__user-name">{userName}</p>
            </div>
            <div className="user-dropdown">
              <span>
                <DPIconMenuDrop />
              </span>
            </div>
          </div>
          <div className="user-menu">
            <div className="img-profile__container">
              <DPIconProfileImage className="profile-icon" />
            </div>
            <div className="organization-container">
              <h2 className="organisation-header">BIGGORILLA SANDBOL</h2>
              <Link to="contact-profile" className="user-menu__links">
                <span>
                  <DPIconOrganisationIcon />
                </span>
                <UserMenuLinkText> Organization Settings</UserMenuLinkText>
              </Link>
            </div>

            <div className="link-container">
              <h2 className="profile-header">PROFILE</h2>
              {menuContent?.map(({ icon, text, route, onClickFunc }) => (
                <Link
                  onClick={onClickFunc}
                  className="user-menu__links"
                  to={route}
                  key={generateUUID()}>
                  <span>{icon}</span>
                  <UserMenuLinkText>{text}</UserMenuLinkText>
                </Link>
              ))}
            </div>
          </div>
        </HeaderRightContent>
      </div>
      <div className="header__second-row">{pageLinks}</div>
    </Header>
  );
}

export default DashboardHeader;
