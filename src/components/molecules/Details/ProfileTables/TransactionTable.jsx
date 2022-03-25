import React, { useState } from "react";
import Pagination from "components/molecules/Pagination";
import { columns, data } from "utilities/transactionData";
import Table from "components/layouts/Table";
import { TableHeading, TableWrapper } from "./styles";

function TransactionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);
  return (
    <div>
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
    </div>
  );
}

export default TransactionTable;
