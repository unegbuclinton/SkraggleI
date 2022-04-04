import React from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Card from "components/atoms/Card";
import Button from "components/atoms/Button/Button";
import { datas1 } from "utilities/overviewData";

function SavedTemplate() {
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
      width: "78.7rem",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
    },
  ];

  const data = [
    {
      action: "",
      name: "Monthly newsletter",
      created: "Dec 7, 2021",
    },
  ];

  return (
    <TemplateWrapper>
       <Card>
        <div className="template-header">
          <p className="template__text">1 Custom Template</p>
          <div className="template-header__right">
            <CustomDropdown data={datas1} />
            <SearchBar />
            <Button className="template-btn">Create Template</Button>
          </div>
        </div>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </TemplateWrapper>
  );
}

export default SavedTemplate;

const TemplateWrapper = styled.div`
  margin-bottom: 1.6rem;

  .template-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.6rem 2.4rem 0 3.6rem;
    padding-top: 1.6;

    .template-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }

    &__right {
      display: flex;
      gap: 1.6rem;
    }
  }
  .template__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};

    padding: 2.4rem 0rem 1.7rem 0rem;
  }

  .template-btn {
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
