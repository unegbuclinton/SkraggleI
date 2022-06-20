import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import DeleteModal from 'components/molecules/Contacts/Modals/DeleteModal/Modal';
import NameLogo from 'components/molecules/NameLogo';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import {
  getMailblastById,
  listAllMailBlast,
  removeMailBlast
} from 'features/mailblast/mailBlastSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateMailModal from '../MailblasModals/CreateMail';

function Mail() {
  const [show, setShow] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const dispatch = useDispatch();
  const itemsPerPage = 5;

  let navigate = useNavigate();

  const { mailBlastDatas, isLoading } = useSelector((state) => state.mailBlast);

  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  const handleDelete = () => {
    const body = {
      mailblasts: getId
    };
    dispatch(removeMailBlast(body)).then(() => {
      dispatch(listAllMailBlast());
      setGetId([]);
      setRowCount(null);
    });
  };

  const onRowClicked = (row) => {
    dispatch(getMailblastById(row.id)).then(() => {
      navigate(`/mail-blasts/${row?.id}`, { state: row });
    });
  };

  const columns = [
    // {
    //   name: '',
    //   cell: () => <Checkbox />,
    //   width: '3.069rem'
    // },
    {
      name: 'NAME',
      selector: (row) => row.name
    },
    {
      name: 'ASSIGNEE',
      cell: () => <NameLogo text="John Doe" />
    },
    {
      name: 'SCHEDULED'
    },
    {
      name: 'STATUS',

      cell: () => (
        <Button pill error className="mail-btn">
          Sent
        </Button>
      )
    }
  ];

  // const mail = mailData.map((data, index) => ({
  //   key: index,
  //   created: data.created,
  //   campaign: data.campaign,
  //   goals: data.goals,
  //   status: data.status
  // }));
  // const indexLasttList = currentPage * itemsPerPage;
  // const indexFirstList = indexLasttList - itemsPerPage;
  // const currentList = 4;

  return (
    <MailWrapper>
      <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        isLoading={isLoading}
        warning="Warning: This will delete these Mail blast permanently from your Skraggle account. This
        action cannot be undone"
      />
      <Card className="mail-card">
        <div className="mail-header">
          <TableHeader
            className="table-header"
            header={`${mailBlastDatas.length} Mail Blasts`}
            title="New Mail Blasts"
            setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            setOpen={setShow}
          />
          {show && <CreateMailModal isShown={show} onCloseModal={() => setShow(false)} />}
        </div>
        <div className="table-container">
          <Table
            columns={columns}
            data={mailBlastDatas}
            onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </div>
      </Card>
      <Pagination
        // currentList={currentList}
        // data={mailData}
        itemsPerPage={itemsPerPage}
        // setCurrentPage={setCurrentPage}
      />
    </MailWrapper>
  );
}
export default Mail;
const MailWrapper = styled.div`
  margin-bottom: 1.6rem;
  height: 100%;
  overflow: auto;
  .mail-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  .mail-header {
    margin: 1.6rem 2.4rem 0 3.6rem;
    .mail-btn {
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
  .mail-btn {
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
