import React from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderLinks, HeaderRightContent } from './styles';

const DashboardHeader = () => {
  return (
    <Header>
      <h2 className="header__company-name">Company Name</h2>
      <HeaderRightContent>
        <HeaderLinks>
          <Link className="header__links" to="/contacts">
            Contact Us
          </Link>
          <Link className="header__links" to="/contacts">
            Support
          </Link>
        </HeaderLinks>

        <div className="user-info">
          <p className="user-info__project-name">BigGorilla Sandbol</p>
          <p className="user-info__user-name">Mohammad Adaam</p>
        </div>
      </HeaderRightContent>
    </Header>
  );
};

export default DashboardHeader;
