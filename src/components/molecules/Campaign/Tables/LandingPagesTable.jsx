import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { landingPagesData } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box, ContainerBody } from "./styles";

const LandingPagesTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "ID",
      selector: (row) => row.uid,
      width: "20rem",
    },

    {
      name: "NAME",
      selector: (row) => row.name,
      width: "20rem",
    },
    {
      name: "CAMPAIGN",
      selector: (row) => row.campaign,
      width: "20rem",
    },
    {
      name: "TYPE",
      selector: (row) => row.type,
      width: "20rem",
    },
    {
      name: "ACTION",
      selector: (row) => row.action,
      cell: (col) => (
        <span>
          <Button className="table-button__clone">Clone</Button>
          <Button className="table-button__edit">Edit</Button>
          <Button className="table-button__remove">Active</Button>
        </span>
      ),
      width: "35rem",
    },
    {
      name: "ADVANCE",
      selector: (row) => row.advance,
      cell: (col) => (
        <span>
          <Button className="table-button__view">View</Button>
          <Button className="table-button__testing">A/B Testing</Button>
        </span>
      ),
    },
  ];

  const data = landingPagesData.map((data, index) => ({
    key: index,
    uid: data.uid,
    name: data.name,
    campaign: data.campaign,
    type: data.type,
    action: data.action,
    advance: data.advance,
  }));

  const onRowClicked = (row, event) => {
    console.log(row, event);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
  <ContainerBody>
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>88 Landing Pages</h1>
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
      <Table columns={columns} data={data} onRowClicked={onRowClicked} />
    </TableWrapper>
    </ContainerBody>
  );
};

export default LandingPagesTable;
