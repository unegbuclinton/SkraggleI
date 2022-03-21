import styled from "styled-components";
import { COLORS } from "constants/colors";

export const BtnWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 1.62rem;

  .table-button {
    background-color: ${COLORS["bg-grey-btn"]};
    color: ${COLORS["tabel-btn-grey"]};
  }
`;
