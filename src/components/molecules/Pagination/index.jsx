import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { DPIconsArrowLeft, DPIconsArrowRight } from 'icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
const Pagination = ({ currentPage, data, itemsPerPage, setCurrentPage }) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumberLimit = 7;

  const pages = [];

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number, index) => {
    return number < maxPageNumberLimit + 1 && number > minPageNumberLimit ? (
      <li
        key={index}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? 'active' : 'pagenumber'}
      >
        {number}
      </li>
    ) : (
      <></>
    );
  });

  const handlePageIncrement = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePageDecrement = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <TrackerBtn onClick={handlePageIncrement}>&hellip;</TrackerBtn>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <TrackerBtn onClick={handlePageDecrement}>&hellip;</TrackerBtn>
    );
  }

  console.log(renderPageNumbers.length);

  return (
    <PaginationWrapper renderPageNumbers={renderPageNumbers}>
      <PaginationButtons
        disabled={currentPage === 1}
        onClick={handlePageDecrement}
      >
        <DPIconsArrowLeft className="arrow" />
      </PaginationButtons>
      {pageDecrementBtn}
      <PageTracker>
        <div className="btn">{renderPageNumbers}</div>
      </PageTracker>
      {pageIncrementBtn}

      <PaginationButtons
        disabled={currentPage === renderPageNumbers.length}
        onClick={handlePageIncrement}
      >
        <DPIconsArrowRight className="arrow" />
      </PaginationButtons>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  display: ${({ renderPageNumbers }) => !renderPageNumbers && 'none'};
  padding-top: 1.6rem;
  justify-content: flex-end;
`;

const PaginationButtons = styled(Button)`
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  width: 7.1rem;
  height: 4.5rem;
  color: ${COLORS.black};
  list-style: none;
  .arrow {
    width: 2.727rem;
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

const TrackerBtn = styled(Button)`
  height: 4.5rem;
  width: 5rem;
  list-style: none;
  border: 0.1rem solid ${COLORS['pagination-bg']};
  background-color: transparent;
  color: ${COLORS['text-pagination']};
  font-size: large;
`;

const PageTracker = styled.div`
  width: auto;
  text-align: center;
  line-height: 18px;
  .btn {
    display: flex;
    gap: 1rem;
    list-style: none;
    cursor: pointer;

    .pagenumber {
      height: 4.5rem;
      width: 4.5rem;
      border: 0.1rem solid ${COLORS['pagination-bg']};
      color: ${COLORS['text-pagination']};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    display: flex;
    gap: 1rem;
    list-style: none;
    cursor: pointer;
    height: 4.5rem;
    width: 4.5rem;
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
