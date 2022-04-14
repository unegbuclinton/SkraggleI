import { React, useState } from "react";

import datas from "utilities/filterData";
import { ReceiptsData } from "utilities/donationData";
import { DPIconAssignee, DPPlusIcon } from "icons";

import Button from "components/atoms/Button/Button";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Checkbox from "components/atoms/CheckBox";

import DropdownComponent from "components/atoms/Dropdown";
import Card from "components/atoms/Card";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import CreateCampaignModal from "components/molecules/Campaign/CreateCampaignModal";

const Receipts = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "CONTACT",
      selector: (row) => row.contact,
      cell: (col) => (
        <Assignee>
          <DPIconAssignee />
          Tillie Mendoza
        </Assignee>
      ),
      width: "25rem",
    },
    {
      name: "DATE RECEIVED",
      selector: (row) => row.dateReceived,
      width: "25rem",
    },
    {
      name: "AMOUNT",
      selector: (row) => row.amount,
      width: "30rem",
    },
    {
      name: "TYPE",
      selector: (row) => row.amount,
      width: "30rem",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
      width: "15rem",
    },
  ];

  const tableData = ReceiptsData.map((adminData, index) => ({
    key: index,
    contact: adminData.contact,
    dateReceived: adminData.dateReceived,
    amount: adminData.amount,
    type: adminData.type,
    status: adminData.status,
  }));

  const [selected, setSelected] = useState("Filters");

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>255 Receipts</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                data={datas}
                className="dropdown-receipts"
              />
              <SearchBar className="search-icon" />
            </div>
          </TableHeaderWrapper>
          <Table columns={columns} data={tableData} />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default Receipts;

export const ContainerBody = styled(Card)`
  margin-top: 1.6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-bottom: 2.4rem;
`;

export const TableWrapper = styled.div`
  .campaign-table {
    margin-top: 1.6rem;
  }

  .table-button {
    padding: 0;
    width: 9.173rem;
    height: 3rem;
    background-color: rgba(125, 194, 55, 0.2);
    border-radius: 40px;
    color: #00913a;
    text-align: center;
    line-height: 140%;
  }
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  padding-top: 1.6rem;
  margin-bottom: 1.6rem;
  h1 {
    display: flex;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.lg};
    line-height: 21px;
    color: ${COLORS["gray-1"]};
  }

  .table-header {
    &__left {
      display: flex;
      flex-direction: row;
      padding-top: 0.8rem;
    }

    &__right {
      display: flex;
      flex-grow: 9;
      flex-direction: row;
      justify-content: right;

      .dropdown-receipts {
        margin-right: 1.6rem;
      }

      .plus-icon {
        margin-right: 0.6rem;
      }
    }
  }
`;

export const Assignee = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
`;
