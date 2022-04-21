import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const AdminWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 1.334rem 3.996rem;
  margin-bottom: 1.6rem;
`;

export const AdminHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS["header-grey"]};
  padding-bottom: 1.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .heading {
    color: ${COLORS["header-grey"]};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
  .edit-btn {
    background-color: ${COLORS.white};
    color: ${COLORS["grey-500"]};
    border: 1px solid ${COLORS.deepPurple};
    width: 9.6rem;
    border-radius: 0.5rem;
  }
`;

export const AdminContainer = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
  display: flex;
  overflow: hidden;
  gap: 5.3rem;
  .title {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["grey-200"]};
    font-weight: ${FONTWEIGHTS.normal};
    width: 17rem;
  }

  .info {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["header-grey"]};
  }

  .id {
    color: ${COLORS.deepPurple};
  }

  .priority {
    color: ${COLORS.pink};
  }

  .last-name {
    color: ${COLORS.deepPurple};
  }

  .tag {
    position: relative;
    top: 0.8rem;
  }

  .volunteer {
    background-color: ${COLORS["bg-grey-btn"]};
    color: ${COLORS["gray-500"]};
  }
`;
