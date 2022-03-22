import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";
import TableContacts from "utilities/TableContacts.json";

import { TableWrapper, TableHeaderWrapper, Box, TableButton } from "./styles";

const CampaignTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box />,
      width: "5rem",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
      width: "20rem",
    },

    {
      name: "CAMPAIGN",
      selector: (row) => row.campaign,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
    },
    {
      name: "FUNDRAISING GOALS",
      selector: (row) => row.goals,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        border: "0.852273px solid #E2E6FF",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#E6EFF1",
        marginBottom: "16px",
        padding: "2rem 0rem 2rem 1.5rem",
        fontSize: "1.2rem",
        color: "#5E5E5E",
      },
    },
  };

  const data = TableContacts.map((d, index) => ({
    key: index,
    created: d.created,
    campaign: d.campaign,
    goals: d.goals,
    status: d.status,
  }));

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>15 Campaigns</h1>
        </div>

        <div className="table-header__right">
          <CustomDropdown className="dropdown-filter" data={datas} />
          <SearchBar className="search-icon" />
          <Button className="campaign-button" onClick={()=> setModalIsOpen(true)} >
            <DPPlusIcon className="plus-icon" />
            New Campaign
          </Button>
          <Modal isShown={modalIsOpen}
          >

          </Modal>

        </div>
      </TableHeaderWrapper>
      <Table columns={columns} data={data} />
    </TableWrapper>
  );
};

export default CampaignTable;
