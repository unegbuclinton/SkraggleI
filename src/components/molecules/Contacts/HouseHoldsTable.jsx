import React, { useState } from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/houseHoldData";
import Pagination from "components/molecules/Pagination";
import { useNavigate } from "react-router-dom";
import { TableWrapper } from "./styles";
import TableHeader from "../TableHeader/TableHeader";

function HouseHoldsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  const navigate = useNavigate();

  const onRowClicked = () => {
    let path = "/contact-profile";
    navigate(path);
  };
  return (
    <div>
      <TableWrapper>
        <TableHeader title="Add Household" header="15 Household" />
        <Table
          columns={columns}
          data={currentList}
          onRowClicked={onRowClicked}
        />
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

export default HouseHoldsTable;
