import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import Pagination from "components/molecules/Pagination";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { ElementsData } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box, ContainerBody } from "./styles";

const ElementsTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
      ignoreRowClick:false,
      width: "5rem",
    },
    {
      name: "ID",
      selector: (row) => row.uid,
      width: "15rem",
    },

    {
      name: "NAME",
      selector: (row) => row.name,
      width: "30rem",
    },
    {
        name: "TYPE",
        selector: (row) => row.type,
      width: "15rem",
    },
    {
        name: "CAMPAIGN",
        selector: (row) => row.campaign,
      width: "20rem",
    },
    {
        name: "STATISTICS",
        selector: (row) => row.statistics,
      width: "30rem",
    },
    {
        name: "LAST SEEN",
        selector: (row) => row.lastseen,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;


  const tableData = ElementsData.map((elementsData, index) => ({
    key: index,
    uid: elementsData.uid,
    name: elementsData.name,
    type: elementsData.type,
    campaign: elementsData.campaign,
    statistics:elementsData.statistics,
    lastseen:elementsData.lastseen,
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
          <h1>15 Elements</h1>
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
    data={ElementsData}
    setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default ElementsTable;
