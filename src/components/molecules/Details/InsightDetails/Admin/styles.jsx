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
    color: ${COLORS.deepPurple};
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

  .title {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["grey-200"]};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .info {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["header-grey"]};
  }

  .id {
    margin-left: 21.1rem;
    color: ${COLORS.deepPurple};
  }

  .priority {
    margin-left: 17.1rem;
    color: ${COLORS.pink};
  }

  .assign {
    margin-left: 16.1rem;
  }

  .last-name {
    margin-left: 15.4rem;
    color: ${COLORS.deepPurple};
  }

  .tag {
    position: relative;
    top: 0.8rem;
  }

  .volunteer {
    margin-left: 19.3rem;
    background-color: ${COLORS["bg-grey-btn"]};
    color: ${COLORS["gray-500"]};
  }

  .note {
    margin-left: 18.5rem;
  }

  .yes {
    margin-left: 14.5rem;
  }

  .status {
    margin-left: 5.3rem;
  }

  .history {
    margin-left: 8.5rem;
  }
`;
