/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import VolunteerModal from 'components/molecules/Contacts/Modals/SubModals/AddVolunteer/Modal';
import SubvolunteerEmptyState from 'components/molecules/EmptyState/ContactSubTabs/Volunteer';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { columns, data } from 'utilities/volunteerData';
import ProfileLayOut from '..';
import { TableWrapper } from './styles';

function VolunteerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;
  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);
  return (
    <>
      <VolunteerModal isShown={open} onClose={() => setOpen(false)} />
      <ProfileLayOut heading="Volunteering">
        {!!data.length ? (
          <div>
            <TableWrapper>
              <TableHeader
                subMenuTableHeader
                title="Add Volunteer"
                header="7 Activity"
                // header={`${todos.length} To-Do`}
                setOpen={setOpen}
              />
              <Table columns={columns} data={currentList} />
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
