import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';
import CreateTransactionModal from '../DonationModals/CreateTransactionModal';

function Transaction() {
  const { oneTimeData } = useSelector((state) => state.donation);
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      name: 'Contact',
      selector: (row) => row?.contact?.first_name,
      width: '30.725rem'
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount,
      width: '40.766rem'
    },
    {
      name: 'DATE',
      selector: (row) => formatDate(row.created_at),
      width: '35.494rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row.type
    }
  ];

  return (
    <TransactionWrapper>
      <Card className="transaction-card">
        <div className="transaction-header">
          <TableHeader className="table-header" title="Create New" setOpen={setShowModal} />
          {showModal && (
            <CreateTransactionModal
              onCloseModal={() => {
                setShowModal(false);
              }}
            />
          )}
        </div>
        <div className="table-container">
          <Table columns={columns} data={oneTimeData} />
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
