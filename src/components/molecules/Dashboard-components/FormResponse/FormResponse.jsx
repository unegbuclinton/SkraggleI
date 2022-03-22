import React from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

function FormResponse() {
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <input type="checkbox" />,
      width: "3.069rem",
    },
    {
      name: "CONTACT",
      selector: (row) => row.contact,
    },
    {
      name: "FORM",
      selector: (row) => row.form,
      width: "20.33rem",
    },
    {
      name: "SUBMITTED",
      selector: (row) => row.submitted,
    },
  ];

  const data = [
    {
      id: 1,
      contact: "Mohammed Adam",
      form: "Subscription Form",
      submitted: "24th Aug",
    },
    {
      id: 1,
      contact: "Mohammed Adam",
      form: "Subscription Form",
      submitted: "24th Aug",
    },
    {
      id: 1,
      contact: "Mohammed Adam",
      form: "Subscription Form",
      submitted: "24th Aug",
    },
  ];

  return (
    <FormResponsewrapper>
      <p className="form-response__text">Recent Form Responses</p>
      <div className="table-container">
        <Table columns={columns} data={data} />
      </div>
    </FormResponsewrapper>
  );
}

export default FormResponse;

const FormResponsewrapper = styled.div`
  margin-bottom: 1.6rem;
  background-color: ${COLORS.white};

  .form-response__text {
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
