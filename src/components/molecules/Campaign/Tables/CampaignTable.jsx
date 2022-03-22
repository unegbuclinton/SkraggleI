import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";
import TableContacts from "utilities/TableContacts.json";

import { TableWrapper, TableHeaderWrapper, Box, TableButton } from "./styles";

const CampaignTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box/>, 
      width: "50px",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
      width: "200px",
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
        padding: "20px 0px 20px 15px",
        fontSize: "12px",
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
  return (
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>15 Campaigns</h1>
        </div>

        <div className="table-header__right">
          <CustomDropdown className="dropdown-filter" data={datas} />
          <SearchBar className="search-icon" />
          <Button className="campaign-button">
            <span>
              <DPPlusIcon className="plus-icon" />
            </span>{" "}
            New Campaign
          </Button>
        </div>
      </TableHeaderWrapper>
      <Table columns={columns} data={data}/>
    </TableWrapper>
  );
};

export default CampaignTable;
