import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import PledgeModal from 'components/molecules/DonationModals/PledgeModal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { getPledge, removePledge } from 'features/donation/donationSlice';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';

const Pledge = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [getId, setGetId] = useState([]);
  const [rowCount, setRowCount] = useState(null);
  const dispatch = useDispatch();
  const { pledgeData } = useSelector((state) => state.donation);

  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };
  const handleDelete = () => {
    const body = {
      ids: getId
    };
    dispatch(removePledge(body)).then(() => {
      dispatch(getPledge());
      setGetId([]);
    });
  };
  const columns = [
    {
      name: 'CONTACT',
      selector: (row) => row.name,
      width: '20rem'
    },

    {
      name: 'AMOUNT',
      selector: (row) => row.amount
    },
    {
      name: 'START DATE',
      selector: (row) => formatDate(row.start_date)
    },
    {
      name: 'DEADLINE',
      selector: (row) => formatDate(row.end_date)
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    },

    {
      name: 'TYPE',
      selector: (row) => row.type
    }
  ];

  const onRowClicked = () => {};

  return (
    <div>
      <PledgeModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these Pledge permanently from your Skraggle account. This
        action cannot be undone"
      />
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Create New"
            header={`${pledgeData?.length} Pledges`}
            setOpen={setOpen}
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            noFilter
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={pledgeData}
            onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default Pledge;

export const ContainerBody = styled(Card)`
  margin-top: 1.6rem;
  padding-top: 2.4rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-bottom: 2.4rem;
`;

export const TableWrapper = styled.div`
  .campaign-table {
    margin-top: 1.6rem;
  }

  .table-button {
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

export const TableHeaderWrapper = styled.div`
  display: flex;
  padding-top: 1.6rem;
  margin-bottom: 1.6rem;
  h1 {
    display: flex;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.lg};
    line-height: 21px;
    color: ${COLORS['gray-1']};
  }

  .table-header {
    &__left {
      display: flex;
      flex-direction: row;
      padding-top: 0.8rem;
    }

    &__right {
      display: flex;
      flex-grow: 9;
      flex-direction: row;
      justify-content: right;

      .dropdown-pledge {
        margin-right: 1.6rem;
      }

      .pledge-button {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        width: 14.4rem;
        height: 4.8rem;
        margin-left: 1.6rem;
      }

      .plus-icon {
        margin-right: 0.6rem;
      }
    }
  }
`;
