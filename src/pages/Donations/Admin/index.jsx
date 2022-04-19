import { React, useState } from "react";

import datas from "utilities/filterData";
import { AdminData } from "utilities/donationData";
import { DPIconAssignee, DPPlusIcon, DPIconDelete } from "icons";

import Button from "components/atoms/Button/Button";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Checkbox from "components/atoms/CheckBox";

import DropdownComponent from "components/atoms/Dropdown";
import Card from "components/atoms/Card";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import NewAdminModal from "components/molecules/DonationModals/NewAdminModal";

const Admin = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      width: "25rem",
    },
    {
      name: "DATE CREATED",
      selector: (row) => row.datecreated,
      width: "30rem",
    },
    {
      name: "ASSIGNEE",
      selector: (row) => row.createdby,
      cell: (col) => (
        <Assignee>
          <DPIconAssignee />
          Tillie Mendoza
        </Assignee>
      ),
      width: "45rem",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
      width: "15rem",
    },
    {
      name: " ",
      selector: (row) => row.delete,
      cell: (col) => <DPIconDelete />,
    },
  ];

  const tableData = AdminData.map((adminData, index) => ({
    key: index,
    name: adminData.name,
    datecreated: adminData.datecreated,
    createdby: adminData.createdby,
    status: adminData.status,
    delete: adminData.delete,
  }));
  const onRowClicked = (row) => {};

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selected, setSelected] = useState("Filters");

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>255 Sources</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                data={datas}
                className="dropdown-pledge"
              />
              <SearchBar className="search-icon" />
              <Button
                className="pledge-button"
                onClick={() => setModalIsOpen(true)}
              >
                <DPPlusIcon className="plus-icon" />
                Create New
              </Button>
              {modalIsOpen && (
                <NewAdminModal
                  isShown={modalIsOpen}
                  onClose={() => {
                    setModalIsOpen(false);
                  }}
                />
              )}
            </div>
          </TableHeaderWrapper>
          <Table
            columns={columns}
            data={tableData}
            onRowClicked={onRowClicked}
          />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default Admin;

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

      .dropdown-pledge {
        margin-right: 1.6rem;
      }

      .pledge-button {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        width: 14.4rem;
        height: 4.8rem;
        margin-left: 1.6rem;
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
