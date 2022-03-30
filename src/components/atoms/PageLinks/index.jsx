import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DPIconPageNavigation } from "icons";
import styled from "styled-components";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";


const PageLinks = ({
  pageLinkBefore,
  pageLinkAfter,
  path,
  navigationIcon,
  pageLinks,
  ...rest
}) => {
  const location = useLocation();
  const name = location.state.campaign;
  console.log(name);

  return (
    <PageLinksWrapper>
      <Link className="page-links__before" to="/campaign">
        {pageLinkBefore}
      </Link>
      <span className="page-links__navigation-icon">
        <DPIconPageNavigation />
      </span>
      <Link className="page-links__after" to="">
        {name}
      </Link>
    </PageLinksWrapper>
  );
};

export default PageLinks;

const PageLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  .page-links {
    &__before {
      text-decoration: none;
      font-size: ${FONTSIZES.xsmall};
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      line-height: 2.1rem;
      letter-spacing: 0em;
      color: rgba(88, 88, 88, 1);
      margin-right: 1.514rem;
    }
    &__navigation-icon {
      margin-right: 1.514rem;
    }
    &__after {
      text-decoration: none;
      font-size: ${FONTSIZES.xsmall};
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      line-height: 2.1rem;
      letter-spacing: 0em;
      color: rgba(154, 154, 169, 1);
    }
  }
`;
