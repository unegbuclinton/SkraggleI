import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const SettingWrapper = styled.div`
  margin-top: 1.6rem;

  .setting-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem 0 2.4rem;

    &__text {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS["gray-1"]};
    }
  }
  .setting-header-right {
    display: flex;
    gap: 1.6rem;
  }
  .setting-edit-btn {
    width: 7.8rem;
    height: 4.8rem;
    background-color: ${COLORS.torquoise};
    color: ${COLORS["gray-500"]};
  }
  .setting-preview-btn {
    width: 9.8rem;
    height: 4.8rem;
    color: ${COLORS.white};
  }
`;

export const SettingBody = styled.div`
  display: flex;
  gap: 4rem;
  padding: 4.2rem 2.4rem 4.4rem 10.2rem;

  .setting-body-text{
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
  }
  #text {
    border: none;
    background-color: ${COLORS.torquoise};
    width: 100%;
    height: 26.8rem;
    color: ${COLORS['grey-400']};
    padding: 3.5rem 4.7rem 4.1rem 3.5rem;
   
  }
`;
