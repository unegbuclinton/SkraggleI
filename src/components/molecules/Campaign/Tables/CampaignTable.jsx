import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import dayjs from 'dayjs';
import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableContacts } from 'utilities/campaigndata';
import datas from 'utilities/filterData';
import CreateCampaignModal from '../CreateCampaignModal';
import { ContainerBody, TableHeaderWrapper, TableWrapper } from './styles';

const CampaignTable = () => {
  const { campaigns } = useSelector((state) => state.campaign);
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'CREATED',
      selector: (row) => {
        return dayjs(row?.created_on).format('DD MMM YYYY');
      },
      width: '20rem'
    },

    {
      name: 'CAMPAIGN',
      selector: (row) => row?.name
    },
    {
      name: 'STATUS',
      selector: (row) => row?.status,
      cell: () => <Button className="table-button">Active</Button>
    },
    {
      name: 'FUNDRAISING GOALS',
      selector: (row) => row?.fundraising_goal.toLocaleString()
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  let navigate = useNavigate();

  const onRowClicked = (row) => {
    navigate(`/campaign/${row.key + 1}`, { state: row });
  };

  const [selected, setSelected] = useState('Filters');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>{`${campaigns.length} Campaigns`}</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                data={datas}
                className="dropdown-campaign"
              />
              <SearchBar className="search-icon" />
              <Button className="campaign-button" onClick={() => setModalIsOpen(true)}>
                <DPPlusIcon className="plus-icon" />
                New Campaign
              </Button>
              {modalIsOpen && (
                <CreateCampaignModal
                  isShown={modalIsOpen}
                  onClose={() => {
                    setModalIsOpen(false);
                  }}
                />
              )}
            </div>
          </TableHeaderWrapper>
          <Table columns={columns} data={campaigns} onRowClicked={onRowClicked} />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        // itemsPerPage={itemsPerPage}
        data={TableContacts}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CampaignTable;
