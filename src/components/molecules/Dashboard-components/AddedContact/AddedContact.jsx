import React from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { DPIconMessage } from "icons";

function AddedContact() {
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <input type="checkbox" />,
      width: "3.069rem",
    },
    {
      name: "FULL NAME",
      selector: (row) => row.fullName,
      width: "20.725rem",
    },
    {
      name: "PRIMARY EMAIL",
      selector: (row) => row.primaryEmail,
      width: "20.766rem",
    },
    {
      name: "ASSIGNEE",
      selector: (row) => row.assignee,
      width: "25.494rem",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
    },
    {
      name: "ACTION",
      selector: (row) => row.action,
      cell: (row) => <DPIconMessage />,
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Mohammed Adam",
      primaryEmail: "pqvd@gmailer.com",
      assignee: "Tushar Imran",
      created: "24th Aug",
      action: "",
    },
    {
      id: 2,
      fullName: "Mohammed Adam",
      primaryEmail: "pqvd@gmailer.com",
      assignee: "Tushar Imran",
      created: "24th Aug",
      action: "",
    },
    {
      id: 3,
      fullName: "Mohammed Adam",
      primaryEmail: "pqvd@gmailer.com",
      assignee: "Tushar Imran",
      created: "24th Aug",
      action: "",
    },
    {
      id: 4,
      fullName: "Mohammed Adam",
      primaryEmail: "pqvd@gmailer.com",
      assignee: "Tushar Imran",
      created: "24th Aug",
      action: "",
    },
    {
      id: 5,
      fullName: "Mohammed Adam",
      primaryEmail: "pqvd@gmailer.com",
      assignee: "Tushar Imran",
      created: "24th Aug",
      action: "",
    },
  ];

  return (
    <AddedContactWrapper>
      <p className="added-contact__text">Recently Added Contacts</p>
      <div className="table-container">
        <Table columns={columns} data={data}/>
      </div>
    </AddedContactWrapper>
  );
}

export default AddedContact;

const AddedContactWrapper = styled.div`
  margin-bottom: 1.6rem;
  background-color: ${COLORS.white};

  .added-contact__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};
    margin: 0rem 3.9rem 0 3.6rem;
    padding: 2.4rem 0rem 1.7rem 0rem;
    border-bottom: 1px solid ${COLORS.torquoise};
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
