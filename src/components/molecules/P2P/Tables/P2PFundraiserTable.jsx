import Button from "components/atoms/Button/Button";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Pagination from "components/molecules/Pagination";
import DropdownComponent from "components/atoms/Dropdown";
import { Box, ContainerBody, TableHeaderWrapper, TableWrapper } from "./styles";
import P2PModalComponent from "../P2PFundraiserModalComponent";



const P2PTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "CAMPAIGN",
      selector: (row) => row.campaign,
      width: "20rem",
    },

    {
      name: "FUNDRAISER",
      selector: (row) => row.fundraiser,
      width: "20rem",
    },
    {
      name: "GOAL",
      selector: (row) => row.goals,
      width: "20rem",
    },
    {
      name: "RAISED",
      selector: (row) => row.raised,
      width: "20rem",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
      width: "20rem",
    },
    {
      name: "GOAL DATE",
      selector: (row) => row.goaldate,
      width: "20rem",
    },
    {
      name: "1M STATISTICS -_-_",
      selector: (row) => row.statistics,
      width: "15rem",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const tableData = P2PTableData.map((P2PData, index) => ({
    key: index,
    campaign: P2PData.campaign,
    fundraiser: P2PData.fundraiser,
    goals: P2PData.goals,
    raised: P2PData.raised,
    created: P2PData.created,
    goaldate: P2PData.goaldate,
    statistics: P2PData.statistics,
  }));

  const currentList = tableData.slice(indexFirstList, indexLasttList);

  let navigate = useNavigate();

  const onRowClicked = (row) => {
    // const pathName = row.campaign.toLowerCase().replace(/ /g, "-");
    navigate(`/peer-to-peer/${row.key+1}`, { state: row });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>15 Campaigns</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent className="dropdown-filter" data={datas} />
              <SearchBar className="search-icon" />
              <Button
                className="p2p-button"
                onClick={() => setModalIsOpen(true)}
              >
                <DPPlusIcon className="plus-icon" />
                New P2P Fundraiser
              </Button>
              {modalIsOpen && (
                <P2PModalComponent
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
            data={currentList}
            onRowClicked={onRowClicked}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={P2PTableData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default P2PTable;
