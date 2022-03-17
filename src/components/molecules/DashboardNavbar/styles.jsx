import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 1.6rem 4rem 1.463rem 3.2rem;
  height: 9rem;
  border-bottom: 1px solid ${COLORS['porcelain-white']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;

  .header {
    &__company-name {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.lg};
      font-family: 'Inter' sans-serif;
      line-height: 2.2rem;
    }
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  align-self: stretch;

  .user-info {
    padding-left: 8.8rem;
    color: ${COLORS['grey-400']};
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__project-name {
      font-weight: ${FONTWEIGHTS.bold};
      font-size: 1.35rem;
    }
    &__user-name {
      font-size: ${FONTSIZES.xsmall};
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;

  row-gap: 2.4rem;
  padding-right: 4rem;
  border-right: 1px solid ${COLORS['fog-grey']};
  gap: 2.4rem;
  font-family: 'Inter' sans-serif;

  .header__links {
    text-decoration: none;
    color: ${COLORS['grey-400']};
    font-size: ${FONTSIZES.small};
    line-height: 1.6rem;
  }
`;
