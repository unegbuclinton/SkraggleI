import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import ReportsData from 'components/molecules/Reports/ReportsData';
import ReportsExportHistory from 'components/molecules/Reports/ReportsExportHistory';
import Tabs from 'components/molecules/Tabs';
import { DPPlusIcon } from 'icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function ReportsMain() {
  const [show, setShow] = useState(true);
  const tabs = [
    {
      title: 'Reports',
      component: <ReportsData />
    },
    {
      title: 'Report Export History',
      component: <ReportsExportHistory setShow={setShow} />
    }
  ];
  return (
    <ReportsMainWrapper>
      <Card className="card-wrapper">
        <Header>
          <h1 className="reports-heading">Dashboard</h1>
          <MenuItems>
            <SearchBar className="search-icon" />
            {show ? (
              <Button className="add-widget-button">
                <DPPlusIcon className="plus-icon" />
                Manage Widgets
              </Button>
            ) : (
              <div></div>
            )}
          </MenuItems>
        </Header>
        <ContainerBody>
          <Tabs tabs={tabs} scroll />
        </ContainerBody>
      </Card>
    </ReportsMainWrapper>
  );
}

export default ReportsMain;

export const ReportsMainWrapper = styled.div`
  height: 100%;
  overflow: auto;
  .card-wrapper {
    padding: 1.6rem 2.4rem 1.6rem 2.4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 0 auto;
  justify-content: space-between;
`;

export const MenuItems = styled.div`
  display: flex;
  gap: 1.6rem;
  .add-widget-button {
    display: flex;
    align-items: center;
    max-width: 14.4rem;
    width: 100%;
    height: 4.8rem;
    gap: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const ContainerBody = styled.div``;
