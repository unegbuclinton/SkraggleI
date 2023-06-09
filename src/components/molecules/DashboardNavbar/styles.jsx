import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const HeaderLeftContent = styled.div`
  display: flex;
  flex: 5;
  justify-content: space-between;
  align-items: center;
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 4rem 1.463rem 3.2rem;
  height: 9rem;
  border-bottom: 1px solid ${COLORS['porcelain-white']};
  position: sticky;
  justify-content: center;
  z-index: 2;
  .header {
    &__first-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    &__second-row {
      height: 2rem;
    }
    &__page-links-before {
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
    &__page-links-after {
      text-decoration: none;
      font-size: ${FONTSIZES.xsmall};
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      line-height: 2.1rem;
      letter-spacing: 0em;
      color: rgba(154, 154, 169, 1);
    }
    &__first-image {
      position: relative;
      left: 8rem;
      bottom: 1rem;
    }
  }
`;

export const HeaderRightContent = styled.div`
  position: relative;

  .title {
    display: flex;
    align-self: stretch;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
  }

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

  .user-dropdown {
    span {
      width: 4rem;
      height: 4rem;
    }
  }

  .user-menu {
    display: flex;
    position: absolute;
    height: ${({ open }) => (open ? '26.5rem' : '0')};
    overflow: ${({ open }) => (open ? '' : 'hidden')};
    left: 3rem;
    top: 4.3rem;
    flex-direction: column;
    background: ${COLORS.white};
    justify-content: center;
    width: 20.9rem;
    box-shadow: -5px 5px 5px -3px rgb(0 0 0 / 20%);

    .organization-container {
      border-bottom: 1px solid #6d696945;
      font-size: 1.2rem;
      /* margin-bottom: 1.4rem; */
      color: rgba(0, 0, 0, 0.45);
      padding: 0.6rem 1rem;

      .organisation-header {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.45);
        margin-left: 0.7rem;
        margin-bottom: 1rem;
      }
    }
    .profile-header {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.45);
      margin-left: 0.7rem;
      margin-bottom: 1rem;
    }
    .img-profile__container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 8.2rem;
      border-bottom: 1px solid #6d696945;

      .profile-icon {
        border-radius: 50%;
      }
    }

    .link-container {
      padding: 0 1rem;
    }
    .user-menu__links {
      display: flex;
      text-decoration: none;
      width: 100%;
      color: ${COLORS['grey-400']};
      font-size: 1rem;
      padding: 0.7rem;
      font-size: 1.4rem;
      font-weight: 500;

      span {
        width: 2rem;
        height: 2rem;
      }
      &:hover {
        background: #d9d9d94a;
        color: #00000073;
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;

export const UserMenuLinkText = styled.p`
  font-weight: ${FONTWEIGHTS.bold};
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
