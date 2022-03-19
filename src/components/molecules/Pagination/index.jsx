import Button from 'components/atoms/Button/Button';
import React from 'react';
import styled, { css } from 'styled-components';
const Pagination = ({
  currentPage,
  totalPages,
  handlePageIncrement,
  handlePageDecrement,
}) => {
  return (
    <PaginationWrapper totalPages={totalPages}>
      <PaginationButtons
        disabled={currentPage === 0}
        onClick={handlePageDecrement}
      >
        <span> {'<'}</span>
      </PaginationButtons>
      <PageTracker>
        <span className="active">{currentPage + 1}</span>{' '}
        <span>of {totalPages}</span>
      </PageTracker>
      <PaginationButtons
        disabled={currentPage + 1 === totalPages}
        onClick={handlePageIncrement}
      >
        <span> {'>'}</span>
      </PaginationButtons>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  display: ${({ totalPages }) => !totalPages && 'none'};
`;

const PaginationButtons = styled(Button)`
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;

  svg {
    width: 0.712rem;
    height: 1.2rem;
  }

  *::selection {
    background-color: transparent;
  }

  *::-moz-selection {
    background-color: transparent;
  }
  * {
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const PageTracker = styled.div`
  width: 7.2rem;
  text-align: center;
  line-height: 18px;

  .active {
  }
`;
