import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: ${COLORS.deepPurple};
  color: ${COLORS.white};
  height: 100%;
  overflow-y: auto;
  width: 25.6rem;
  padding-top: 3.528rem;

  .sidebar__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 7.05rem;
  }
`;

export const SideNavLinkText = styled.p`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  line-height: 1.7rem;
  font-family: 'Inter', sans-serif;
`;

export const SidebarLinksWrapper = styled.div`
  & > :first-child {
    margin-bottom: 1.5rem;
    padding-left: 3.3rem;
  }

  .nav-link {
    color: ${COLORS.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: ${FONTSIZES.small};
    gap: 2.35rem;
    padding: 1rem 3.583rem 1rem 3.25rem;
    &--selected {
      background-color: ${COLORS.pink};
    }
  }
`;
