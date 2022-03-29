import Button from "components/atoms/Button/Button";
import { COLORS } from "constants/colors";
import { DPIconsArrowLeft, DPIconsArrowRight } from "icons";
import React, { useState } from "react";
import styled, { css } from "styled-components";
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
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={index}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : "pagenumber"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
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
      <TrackerBtn pill onClick={handlePageIncrement}>
        &hellip;
      </TrackerBtn>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <TrackerBtn pill onClick={handlePageDecrement}>
        &hellip;
      </TrackerBtn>
    );
  }

  console.log(renderPageNumbers.length);

  return (
    <PaginationWrapper renderPageNumbers={renderPageNumbers}>
      <PaginationButtons
        pill
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
        pill
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
  display: ${({ renderPageNumbers }) => !renderPageNumbers && "none"};
  padding-top: 1.6rem;
  justify-content: flex-end;
`;

const PaginationButtons = styled(Button)`
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed !important;
    `}
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white} !important;
  width: 7.1rem !important;
  height: 4.5rem !important;
  color: ${COLORS.black} !important;
  list-style: none;
  border-radius: 0 !important;
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
  height: 4.5rem !important;
  width: 5rem !important;
  list-style: none;
  border: 0.1rem solid ${COLORS["pagination-bg"]} !important;
  background-color: transparent !important;
  color: ${COLORS["text-pagination"]} !important;
  font-size: large;
  border-radius: 0 !important;
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
      border: 0.1rem solid ${COLORS["pagination-bg"]};
      color: ${COLORS["text-pagination"]};
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
