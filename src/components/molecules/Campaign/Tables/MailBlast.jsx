import Button from 'components/atoms/Button/Button';
// import Checkbox from 'components/atoms/CheckBox';
// import DropdownComponent from 'components/atoms/Dropdown';
// import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import NameLogo from 'components/molecules/NameLogo';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
// import { DPIconAssignee, DPPlusIcon } from 'icons';
import CreateMailModal from 'pages/MailBlast/MailblasModals/CreateMail';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { mailBlastData } from 'utilities/campaigndata';
// import datas from 'utilities/filterData';
import { ContainerBody, TableWrapper } from './styles';

const MailBlast = () => {
  const { mailBlast } = useSelector((state) => state.campaign);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const columns = [
    {
      name: 'NAME',
      selector: (row) => row.name
    },
    {
      name: 'ASSIGNEE',
      cell: (row) => <NameLogo text={row.name} />
    },
    {
      name: 'SCHEDULED'
    },
    {
      name: 'STATUS',

      cell: () => (
        <Button pill error className="mail-btn">
          Sent
        </Button>
      )
    }
  ];

  const onRowClicked = (row) => {
    navigate(`/mail-blasts/${row?.id}`, { state: row });
  };

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <ContainerBody>
        <CreateMailModal isShown={show} onCloseModal={() => setShow(false)} />
        <TableWrapper>
          <TableHeader
            header={`${mailBlast?.length} Mail Blasts`}
            title="New Mail Blasts"
            setOpen={setShow}
          />
          <Table columns={columns} data={mailBlast} onRowClicked={onRowClicked} />
        </TableWrapper>
      </ContainerBody>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MailBlast;
