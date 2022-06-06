import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import PledgeModal from 'components/molecules/DonationModals/PledgeModal';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import datas from 'utilities/filterData';
import { formatDate } from 'utilities/helpers';

const Pledge = () => {
  const { pledgeData } = useSelector((state) => state.donation);

  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'CONTACT',
      selector: (row) => row.name,
      width: '20rem'
    },

    {
      name: 'AMOUNT',
      selector: (row) => row.amount
    },
    {
      name: 'START DATE',
      selector: (row) => formatDate(row.start_date)
    },
    {
      name: 'DEADLINE',
      selector: (row) => formatDate(row.end_date)
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    },

    {
      name: 'TYPE',
      selector: (row) => row.type
    }
  ];

  const onRowClicked = () => {};

  const [selected, setSelected] = useState('Filters');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>{`${pledgeData?.length} Pledges`}</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                data={datas}
                className="dropdown-pledge"
              />
              <SearchBar className="search-icon" />
              <Button className="pledge-button" onClick={() => setModalIsOpen(true)}>
                <DPPlusIcon className="plus-icon" />
                Create New
              </Button>
              {modalIsOpen && (
                <PledgeModal
                  isShown={modalIsOpen}
                  onClose={() => {
                    setModalIsOpen(false);
                  }}
                />
              )}
            </div>
          </TableHeaderWrapper>
          <Table columns={columns} data={pledgeData} onRowClicked={onRowClicked} />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default Pledge;

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
    color: ${COLORS['gray-1']};
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
