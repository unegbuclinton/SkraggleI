import React from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";
import Button from "components/atoms/Button/Button";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import { datas1 } from "utilities/overviewData";

function Mail() {
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <input type="checkbox" />,
      width: "3.069rem",
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "ASSIGNEE",
      selector: (row) => row.assignee,
    },
    {
      name: "SCHEDULED",
      selector: (row) => row.scheduled,
    },
    {
      name: "STATUS",
      selector: (row) => row.created,
      cell: (ow) => (
        <Button pill className="mail-btn">
          Sent
        </Button>
      ),
    },
  ];

  const data = [
    {
      action: "",
      name: "Monthly newsletter",
      assignee: "Partho Datta",
      scheduled: "",
      status: "",
    },
    {
      action: "",
      name: "Monthly newsletter",
      assignee: "Partho Datta",
      scheduled: "",
      status: "",
    },
    {
      action: "",
      name: "Monthly newsletter",
      assignee: "John Doe",
      scheduled: "",
      status: "",
    },
    {
      action: "",
      name: "Monthly newsletter",
      assignee: "Hannah Dandanell",
      scheduled: "",
      status: "",
    },
  ];

  return (
    <MailWrapper>
      <Card>
        <div className="mail-header">
          <p className="mail__text">4 Mail Blasts</p>
          <div className="mail-header__right">
            <CustomDropdown data={datas1} />
            <SearchBar />
            <Button className="mail-btn">New Mail Blasts</Button>
          </div>
        </div>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </MailWrapper>
  );
}

export default Mail;

const MailWrapper = styled.div`
  margin-bottom: 1.6rem;

  .mail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.6rem 2.4rem 0 3.6rem;
    padding-top: 1.6;

    .mail-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }

    &__right {
      display: flex;
      gap: 1.6rem;
    }
  }
  .mail__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};

    padding: 2.4rem 0rem 1.7rem 0rem;
  }

  .mail-btn {
    width: 9.173rem;
    height: 3rem;
  }

  .table-container {
    padding: 1.6rem 2.4rem 4.2rem 2.4rem;

    .rtd_ {
      &TableCol {
        padding-left: 3.4rem;
      }
    }
  }
`;
