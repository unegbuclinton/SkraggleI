import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import { FONTWEIGHTS } from "constants/font-spec";

export const DefaultWrapper = styled.div`
  .default-card {
    padding: 2.4rem 0;
  }
  .section-container {
    padding: 2.4rem 2.892rem 3.2rem 4.3rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }
  .section-container-text {
    padding: 3.2rem 0 3.2rem 4.3rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }

  .default-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    margin-top: 5.6rem;
    padding-right: 2.4rem;
  }

  .default-cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS["gray-500"]};
  }
  .default-save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const DefaultHeader = styled.p`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS["black-shade"]};
  margin-bottom: 2.4rem;
`;

export const TemplateItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  .template-item {
    width: 17.736rem;
    height: 22rem;
    background: ${COLORS["grey-box"]};
  }
`;
