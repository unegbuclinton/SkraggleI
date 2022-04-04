import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderLinks,
  HeaderLeftContent,
  HeaderRightContent,
} from "./styles";

const DashboardHeader = ({
  pageLinkBefore,
  pageLinkAfter,
  path,
  navigationIcon,
  pageLinks,
  ...rest
}) => {
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
        <HeaderRightContent>
          <div className="user-info">
            <p className="user-info__project-name">BigGorilla Sandbol</p>
            <p className="user-info__user-name">Mohammad Adaam</p>
          </div>
        </HeaderRightContent>
      </div>
      <div className="header__second-row">
      {pageLinks}
      </div>
    </Header>
  );
};

export default DashboardHeader;
