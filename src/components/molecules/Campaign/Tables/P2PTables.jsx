import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import Pagination from "components/molecules/Pagination";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { P2PForm } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box, ContainerBody } from "./styles";

const P2PTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
      ignoreRowClick:false,
      width: "5rem",
    },
    {
      name: "P2P EVENTS NAME",
      selector: (row) => row.name,
      width: "35rem",
    },

    {
      name: "TYPE",
      selector: (row) => row.type,
      width: "20rem",
    },
    {
        name: "RAISED",
        selector: (row) => row.raised,
      width: "20rem",
    },
    {
        name: "DONATIONS",
        selector: (row) => row.donations,
      width: "35rem",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
    },  
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexLasttList = currentPage * itemsPerPage;
  const indexFirstList = indexLasttList - itemsPerPage;

  const tableData = P2PForm.map((p2pData, index) => ({
    key: index,
    name: p2pData.name,
    type: p2pData.type,
    raised: p2pData.raised,
    donations: p2pData.donations,
    status:p2pData.status
  }));

  const currentList = tableData.slice(indexFirstList, indexLasttList);

  const onRowClicked = (row, event) => { console.log(row,event) };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
    <ContainerBody>
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>88 Forms</h1>
        </div>

        <div className="table-header__right">
          <CustomDropdown className="dropdown-filter" data={datas} />
          <SearchBar className="search-icon" />
          <Button
            className="campaign-button"
            onClick={() => setModalIsOpen(true)}
          >
            <DPPlusIcon className="plus-icon" />
            Create New
          </Button>
          <Modal isShown={modalIsOpen} showClose></Modal>
        </div>
      </TableHeaderWrapper>
      <Table
        columns={columns}
        data={currentList}
        onRowClicked={onRowClicked}
      />
    </TableWrapper>
    </ContainerBody>
    <Pagination
    currentPage={currentPage}
    itemsPerPage={itemsPerPage}
    data={P2PForm}
    setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default P2PTable;
