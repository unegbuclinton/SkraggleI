/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import SubvolunteerEmptyState from 'components/molecules/EmptyState/ContactSubTabs/Volunteer';
import Pagination from 'components/molecules/Pagination';
import React, { useState } from 'react';
import { columns, data } from 'utilities/volunteerData';
import ProfileLayOut from '..';
import { TableHeading, TableWrapper } from './styles';

function VolunteerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);
  return (
    <ProfileLayOut heading="Volunteering">
      {!!data.length ? (
        <div>
          <TableWrapper>
            <TableHeading>
              <h2 className="heading">7 Activity</h2>
            </TableHeading>
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
        <SubvolunteerEmptyState />
      )}
    </ProfileLayOut>
  );
}

export default VolunteerTable;
