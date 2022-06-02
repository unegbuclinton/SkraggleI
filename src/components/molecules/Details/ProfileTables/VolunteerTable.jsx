/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import VolunteerModal from 'components/molecules/Contacts/Modals/SubModals/AddVolunteer/Modal';
import SubvolunteerEmptyState from 'components/molecules/EmptyState/ContactSubTabs/Volunteer';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import { data } from 'utilities/volunteerData';
import ProfileLayOut from '..';
import { TableWrapper } from './styles';

function VolunteerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;
  // const indexLasttList = currentPage * itemsPerPage;

  // const indexFirstList = indexLasttList - itemsPerPage;

  // const currentList = data.slice(indexFirstList, indexLasttList);

  const { volunteers } = useSelector((state) => state.contact);

  const columns = [
    {
      name: 'ACTIVITY NAME',
      selector: (row) => {
        return row.name;
      },
      width: '16.3rem'
    },

    {
      name: 'START DATE',
      selector: (row) => {
        return formatDate(row?.start_at);
      },
      width: '15.1rem'
    },
    {
      name: 'EXPIRATION DATE',
      selector: (row) => {
        return formatDate(row?.end_at);
      },
      width: '15.5rem'
    },

    {
      name: 'FEE',
      selector: (row) => {
        return `$ ${row.fee}`;
      },
      width: '15.1rem'
    },

    {
      name: 'STATUS',
      selector: (row) => {
        return row.status;
      },
      width: '15.5rem'
    }
  ];
  return (
    <>
      <VolunteerModal isShown={open} onClose={() => setOpen(false)} />
      <ProfileLayOut heading="Volunteering">
        {!!volunteers.length ? (
          <div>
            <TableWrapper>
              <TableHeader
                subMenuTableHeader
                title="Add Volunteer"
                header="7 Activity"
                // header={`${todos.length} To-Do`}
                setOpen={setOpen}
              />
              <Table columns={columns} data={volunteers} />
            </TableWrapper>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={data}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <SubvolunteerEmptyState setOpen={setOpen} />
        )}
      </ProfileLayOut>
    </>
  );
}

export default VolunteerTable;
