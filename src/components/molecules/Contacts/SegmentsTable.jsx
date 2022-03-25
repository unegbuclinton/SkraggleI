import React, { useState } from "react";
import Table from "components/layouts/Table";
import { columns, data } from "utilities/segmentsData";
import Pagination from "components/molecules/Pagination";
import { TableWrapper } from "./styles";
import TableHeader from "../TableHeader/TableHeader";
import { useNavigate } from "react-router-dom";
import SegmentsModal from "./Modals/SegmentsModal/mainModal";

function SegmentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
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
        <TableHeader
          title="Create Segments"
          header="14 Segments"
          setOpen={setOpen}
        />
        <Table
          columns={columns}
          data={currentList}
          onRowClicked={onRowClicked}
        />
        <SegmentsModal isShown={open} onClose={() => setOpen(false)} />
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

export default SegmentsTable;
