import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  width: 100%;
  gap: 1.62rem;

  .table-button {
    background-color: ${COLORS['bg-grey-btn']};
    color: ${COLORS['gray-500']};
  }

  .active-table-btn {
    padding: 0;
    width: 9.173rem;
    height: 3rem;
    background-color: rgba(125, 194, 55, 0.2);
    border-radius: 40px;
    color: #00913a;
    text-align: center;
    line-height: 140%;
  }
`;
