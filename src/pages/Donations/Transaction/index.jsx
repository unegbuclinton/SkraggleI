import React, { useState } from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";
import TableHeader from "components/molecules/TableHeader/TableHeader";
import CreateTransactionModal from "../DonationModals/CreateTransactionModal";
import Checkbox from "components/atoms/CheckBox";

function Transaction() {
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <Checkbox />,
      width: "3.069rem",
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      width: "30.725rem",
    },
    {
      name: "AMOUNT",
      selector: (row) => row.amount,
      width: "40.766rem",
    },
    {
      name: "DATE",
      selector: (row) => row.date,
      width: "35.494rem",
    },
    {
      name: "TYPE",
      selector: (row) => row.type,
    },
  ];

  const transactionData = [
    {
      id: 1,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 2,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 3,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 4,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 5,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 6,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 7,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 8,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 9,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
    {
      id: 10,
      contact: "Mohammed Adam",
      amount: "Details",
      date: "24th Aug",
      type: "Incomplete",
    },
  ];

  const mail = transactionData.map((data, index) => ({
    key: index,
    contact: data.contact,
    amount: data.amount,
    date: data.date,
    type: data.type,
  }));

  return (
    <TransactionWrapper>
      <Card className="transaction-card">
        <div className="transaction-header">
          <TableHeader
            className="table-header"
            header="1,014 Transactions"
            title="Create New"
            setOpen={setShowModal}
          />
          {showModal && <CreateTransactionModal onCloseModal={()=>{setShowModal(false)}}/>}
        </div>
        <div className="table-container">
          <Table columns={columns} data={mail} />
        </div>
      </Card>
    </TransactionWrapper>
  );
}
export default Transaction;

const TransactionWrapper = styled.div`
  margin-bottom: 1.6rem;
  .transaction-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  .transaction-header {
    margin: 1.6rem 2.4rem 0 3.6rem;
    .transaction-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }
    &__right {
      display: flex;
      gap: 1.6rem;
    }
    .table-header {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["header-grey"]};
    }
  }
  .transaction-btn {
    width: 9.173rem;
    height: 3rem;
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
