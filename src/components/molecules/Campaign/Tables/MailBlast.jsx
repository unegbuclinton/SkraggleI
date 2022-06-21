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
// import { useNavigate } from 'react-router-dom';
// import { mailBlastData } from 'utilities/campaigndata';
// import datas from 'utilities/filterData';
import { ContainerBody, TableWrapper } from './styles';

const MailBlast = () => {
  const { mailBlast } = useSelector((state) => state.campaign);
  console.log(mailBlast);
  const [show, setShow] = useState(false);
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
  // const columns = [
  //   {
  //     name: ' ',
  //     cell: () => <Checkbox />,
  //     ignoreRowClick: false,
  //     width: '5rem'
  //   },
  //   {
  //     name: 'NAME',
  //     selector: (row) => row.name,
  //     width: '20rem'
  //   },

  //   {
  //     name: 'ASSIGNEE',
  //     selector: (row) => row.assignee,
  //     cell: () => (
  //       <Assignee>
  //         <DPIconAssignee />
  //         Tillie Mendoza
  //       </Assignee>
  //     ),
  //     width: '45rem'
  //   },
  //   {
  //     name: 'TYPE',
  //     selector: (row) => row.type,
  //     width: '30rem'
  //   },
  //   {
  //     name: 'STATUS',
  //     selector: (row) => row.status,
  //     cell: () => <Button className="table-button">Active</Button>
  //   }
  // ];

  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // const indexLastList = currentPage * itemsPerPage;
  // const indexFirstList = indexLastList - itemsPerPage;

  // const tableData = mailBlastData.map((mailData, index) => ({
  //   key: index,
  //   name: mailData.name,
  //   assignee: mailData.assignee,
  //   type: mailData.type,
  //   status: mailData.status
  // }));

  // const [selected, setSelected] = useState('Filters');

  // let navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/mail-blast');
  // };

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
          <Table columns={columns} data={mailBlast} />
        </TableWrapper>
      </ContainerBody>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MailBlast;
