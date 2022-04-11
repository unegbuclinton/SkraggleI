import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconPageNavigation } from 'icons';
import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const PageLinks = ({
  pageLinkBefore,
  pageLinkAfter,
  navigationIcon,
  names,
  to,
  ...rest
}) => {
  const name = names;
  
  return (
    <PageLinksWrapper>
      <Link className="page-links__before" to={to}>
        {pageLinkBefore}
      </Link>
      <span className="page-links__navigation-icon">
        <DPIconPageNavigation />
      </span>
      <div className="page-links__after">{name}</div>
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







