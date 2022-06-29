import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { getRecurringTransaction, removeRecurring } from 'features/donation/donationSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RecurringModal from '../DonationModals/RecurringModal';

function DonationRecurring() {
  const dispatch = useDispatch();

  const { recurringData } = useSelector((state) => state.donation);

  const [showModal, setShowModal] = useState(false);

  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      ids: getId
    };
    dispatch(removeRecurring(body)).then(() => {
      dispatch(getRecurringTransaction());
      setGetId([]);
    });
  };
  const columns = [
    {
      name: 'Contact',
      selector: (row) => row?.contact_id,
      width: '30.725rem'
    },
    {
      name: 'AMOUNT',
      selector: (row) => row?.amount,
      width: '30.766rem'
    },
    {
      name: 'BILLING CYCLE',
      selector: (row) => row?.billing_cycle,
      width: '20.494rem'
    },
    {
      name: 'STATUS',
      cell: (row) => (
        <Button pill success>
          {row?.status}
        </Button>
      ),
      width: '20.494rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row?.type
    }
  ];

  return (
    <RecurringWrapper>
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these transaction permanently from your Skraggle account. This
        action cannot be undone"
      />
      <Card className="recurring-card">
        <div className="recurring-header">
          <TableHeader
            className="table-header"
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            header={`${recurringData?.length} Recurrings`}
            title="Create New"
            show={!!getId.length}
            setOpen={setShowModal}
          />
          {showModal && (
            <RecurringModal
              onCloseModal={() => {
                setShowModal(false);
              }}
            />
          )}
        </div>
        <div className="table-container">
          <Table
            columns={columns}
            data={recurringData}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </div>
      </Card>
    </RecurringWrapper>
  );
}
export default DonationRecurring;

const RecurringWrapper = styled.div`
  margin-bottom: 1.6rem;
  height: 100%;
  overflow: auto;
  .recurring-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  .recurring-header {
    margin: 1.6rem 2.4rem 0 3.6rem;
    .recurring-btn {
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
  .recurring-btn {
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
