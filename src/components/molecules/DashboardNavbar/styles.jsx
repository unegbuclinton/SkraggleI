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
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

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
      cursor: pointer;
    }
  }

  .user-menu {
    display: flex;
    position: absolute;
    height: ${({ open }) => (open ? '26.5rem' : '0')};
    overflow: ${({ open }) => (open ? '' : 'hidden')};
    right: 0;
    top: 3rem;
    flex-direction: column;
    background: ${COLORS.white};
    justify-content: center;
    width: 20.9rem;
    box-shadow: -5px 5px 5px -3px rgb(0 0 0 / 20%);

    .organization-container {
      border-bottom: 1px solid #6d696945;
      margin-bottom: 1.4rem;
      font-size: 9px;
      color: rgba(0, 0, 0, 0.45);
      padding-left: 1rem;

      .organisation-header {
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.45);
        margin-bottom: 1rem;
        padding-left: 1.2rem;
      }
    }
    .profile-header {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.45);
      margin-bottom: 1.6rem;
    }
    .img-profile__container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 8.2rem;
      border-bottom: 1px solid #6d696945;
      margin-bottom: 0.6rem;

      .profile-icon {
        border-radius: 50%;
      }
    }

    .link-container {
      padding-left: 1.8rem;
    }
    .user-menu__links {
      display: flex;
      text-decoration: none;
      width: 100%;
      color: ${COLORS['grey-400']};
      font-size: 1rem;
      margin-bottom: 0.7rem;
      padding: 0.7rem 0 0 0.7rem;

      span {
        width: 2rem;
        height: 2rem;
      }
      &:hover {
        background: #d9d9d94a;
        color: #00000073;
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
