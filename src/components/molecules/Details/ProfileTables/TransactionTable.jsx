/* eslint-disable no-extra-boolean-cast */
import Table from 'components/layouts/Table';
import DonationSubTabEmptyState from 'components/molecules/EmptyState/ContactSubTabs/Donations';
import Pagination from 'components/molecules/Pagination';
import React, { useState } from 'react';
import { columns, data } from 'utilities/transactionData';
import ProfileLayOut from '..';
import { TableHeading, TableWrapper } from './styles';

function TransactionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  return (
    <>
      {!!data.length ? (
        <ProfileLayOut heading="Transactions">
          <TableWrapper>
            <TableHeading>
              <h2 className="heading">7 Transactions</h2>
            </TableHeading>
            <Table columns={columns} data={currentList} />
          </TableWrapper>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            data={data}
            setCurrentPage={setCurrentPage}
          />
        </ProfileLayOut>
      ) : (
        <DonationSubTabEmptyState />
      )}
    </>
  );
}

export default TransactionTable;
