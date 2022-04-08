import React, { useState } from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";
import Button from "components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import NameLogo from "components/molecules/NameLogo";
import TableHeader from "components/molecules/TableHeader/TableHeader";
import Pagination from "components/molecules/Pagination";
import CreateMailModal from "../MailblasModals/CreateMail";
import Checkbox from "components/atoms/CheckBox";

function Mail() {
  const [mailModal, setMailModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  let navigate = useNavigate();

  const handleRowClicked = (row) => {
    navigate(`/mail-blasts/${row.id}`, { state: row });
  };

  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <Checkbox />,
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
      selector: (row) => row.status,
      // cell: (ow) => (
      //   <Button pill success className="mail-btn">
      //     Sent
      //   </Button>
      // ),
    },
  ];

  const data = [
    {
      id: 1,
      action: "",
      name: "Monthly newsletter",
      assignee: <NameLogo text="Partho Datta" />,
      scheduled: "",
      status: (
        <Button pill error>
          Sent
        </Button>
      ),
    },
    {
      id: 2,
      action: "",
      name: "Monthly newsletter",
      assignee: <NameLogo text="Partho Datta" />,
      scheduled: "",
      status: (
        <Button pill success className="mail-btn">
          Draft
        </Button>
      ),
    },
    {
      id: 3,
      action: "",
      name: "Monthly newsletter",
      assignee: <NameLogo text="John Doe" />,
      scheduled: "",
      status: (
        <Button pill success className="mail-btn">
          Draft
        </Button>
      ),
    },
    {
      id: 4,
      action: "",
      name: "Monthly newsletter",
      assignee: <NameLogo text="Hannah Dandanell" />,
      scheduled: "",
      status: (
        <Button pill success className="mail-btn">
          Draft
        </Button>
      ),
    },
  ];

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  return (
    <MailWrapper>
      <Card className="mail-card">
        <div className="mail-header">
          <TableHeader
            setOpen={setMailModal}
            className="table-header"
            header="4 Mail Blasts"
            title="New Mail Blasts"
          />
          {mailModal && (
            <CreateMailModal
              isShown={mailModal}
              onCloseModal={() => setMailModal(false)}
            />
          )}
        </div>

        <div className="table-container">
          <Table
            columns={columns}
            data={currentList}
            onRowClicked={handleRowClicked}
          />
        </div>
      </Card>
      <Pagination
        currentList={currentList}
        data={data}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </MailWrapper>
  );
}

export default Mail;

const MailWrapper = styled.div`
  margin-bottom: 1.6rem;

  .mail-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  .mail-header {
    margin: 1.6rem 2.4rem 0 3.6rem;

    .mail-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }

    &__right {
      display: flex;
      gap: 1.6rem;
    }

    .table-header {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["header-grey"]};
    }
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
