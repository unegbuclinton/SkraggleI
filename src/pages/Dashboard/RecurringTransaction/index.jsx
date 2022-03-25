import React from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { DPIconMessage } from "icons";
import Card from "components/atoms/Card"

function RecurringTransaction() {
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <input type="checkbox" />,
      width: "3.069rem",
    },
    {
      name: "CONTACT",
      selector: (row) => row.contact,
    },
    {
      name: "TOTAL AMOUNT",
      selector: (row) => row.totalAmount,
    },
    {
      name: "NEXT PAYMENT",
      selector: (row) => row.nextPayment,
    },
    {
      name: "ACTION",
      selector: (row) => row.action,
      cell: (row) => <DPIconMessage />,
      width: "25.494rem",
    },
  ];

  const data = [
    {
      id: 1,
      contact: "Mohammed Adam",
      totalAmount: "	$1.99",
      nextPayment: "24th Aug",
      action: "",
    },
    {
      id: 2,
      contact: "Mohammed Adam",
      totalAmount: "	$1.99",
      nextPayment: "24th Aug",
      action: "",
    },
    {
      id: 3,
      contact: "Mohammed Adam",
      totalAmount: "	$1.99",
      nextPayment: "24th Aug",
      action: "",
    },
    {
      id: 4,
      contact: "Mohammed Adam",
      totalAmount: "	$1.99",
      nextPayment: "24th Aug",
      action: "",
    },
  ];
  return (
    <RecurringWrapper>
      <Card>
        <p className="recurring-header__text">
          Upcoming Recurring Transactions
        </p>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </RecurringWrapper>
  );
}

export default RecurringTransaction;

const RecurringWrapper = styled.div`
  margin-bottom: 5.1rem;

  .recurring-header__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};
    margin: 0rem 3.9rem 0 3.6rem;
    padding: 2.4rem 0rem 1.7rem 0rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }

  .table-container {
    padding: 1.6rem 2.4rem 4.2rem 2.4rem;

    .rtd_ {
      &TableCol {
        padding-left: 3.4rem;
      }
    }
  }
`;
