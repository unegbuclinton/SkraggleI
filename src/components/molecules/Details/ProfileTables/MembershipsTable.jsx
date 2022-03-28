import React, { useState } from "react";
import Pagination from "components/molecules/Pagination";
import { columns, data } from "utilities/membership";
import { TableHeading, TableWrapper } from "./styles";
import Table from "components/layouts/Table";
import ProfileLayOut from "..";

function MembershipsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);
  return (
    <ProfileLayOut heading="Membership">
      <TableWrapper>
        <TableHeading>
          <h2 className="heading">8 Membership Subscription</h2>
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
  );
}

export default MembershipsTable;
