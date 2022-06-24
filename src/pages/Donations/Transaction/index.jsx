import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import TransactionType from 'components/molecules/DonationModals/TransactionType';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
import CreateTransactionModal from '../DonationModals/CreateTransactionModal';

function Transaction() {
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'Contact',
      selector: (row) => row.contact,
      width: '30.725rem'
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount,
      width: '40.766rem'
    },
    {
      name: 'DATE',
      selector: (row) => row.date,
      width: '35.494rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row.type
    }
  ];

  const transactionData = [
    {
      id: 1,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 2,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 3,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 4,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 5,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 6,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 7,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 8,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 9,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    },
    {
      id: 10,
      contact: 'Mohammed Adam',
      amount: 'Details',
      date: '24th Aug',
      type: 'Incomplete'
    }
  ];

  const mail = transactionData.map((data, index) => ({
    key: index,
    contact: data.contact,
    amount: data.amount,
    date: data.date,
    type: data.type
  }));

  return (
    <TransactionWrapper>
      <Card className="transaction-crard">
        <div className="transaction-header">
          <TableHeader
            className="table-header"
            header="1,014 Transactions"
            title="Create New"
            setOpen={() => setShowModal((prev) => !prev)}
          />
          {show && (
            <CreateTransactionModal
              onCloseModal={() => {
                setShow(false);
              }}
            />
          )}
          {showModal && <TransactionType onClick={() => setShow(true)} />}
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
  /* position: relative; */
  margin-bottom: 1.6rem;
  height: 100%;
  overflow: auto;
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
      color: ${COLORS['header-grey']};
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
