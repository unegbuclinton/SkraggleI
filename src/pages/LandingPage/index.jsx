import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import DashboardHeader from 'components/molecules/DashboardNavbar';
import AddElement from 'components/molecules/LandingpageComponents/ElementSidebarpallete/AddElement';
import Tabs from 'components/molecules/Tabs';
import {
  DPIconColumn,
  DPIconConnect,
  DPIconDesktop,
  DPIconDiskette,
  DPIconElement,
  DPIconMobileTool,
  DPIconPalleteSetting,
  DPIconPopIcon,
  DPIconRow,
  DPIconSection,
  DPIconView
} from 'icons';
import React, { useState } from 'react';
import {
  LandingPageBody,
  LandingPageContainer,
  LandingPageEditArea,
  LandingPageSideTools,
  LandingPageSideToolsHeader,
  LandingPageToolBox,
  LandingPageWrapper
} from './styles';

function LandingPage() {
  const [activeTab, setActiveatab] = useState(0);
  const toolsBtns = [
    {
      icon: <DPIconDesktop />
    },
    {
      icon: <DPIconMobileTool />
    },
    {
      icon: <DPIconConnect />
    },
    {
      icon: <DPIconPalleteSetting />
    },
    {
      icon: <DPIconPopIcon />
    }
  ];
  const elemetBtns = [
    {
      title: 'Sections',
      icon: <DPIconSection />
    },
    {
      title: 'Row',
      icon: <DPIconRow />
    },
    {
      title: 'Column',
      icon: <DPIconColumn />
    },
    {
      title: 'Elements',
      icon: <DPIconElement />
    },
    {
      title: 'Preview',
      icon: <DPIconView />
    },
    {
      title: 'Save',
      icon: <DPIconDiskette />
    }
  ];
  const elementsComp = [
    {
      title: 'Add Elements',
      component: <AddElement />
    },
    {
      title: 'Manage it',
      component: <div>Manage World </div>
    }
  ];
  return (
    <LandingPageWrapper>
      <DashboardHeader />
      <LandingPageToolBox>
        <LandingPageContainer>
          <Button className="exit-btn">Exit</Button>
          {toolsBtns?.map(({ icon }, idx) => (
            <Button
              className="tool-btn"
              key={idx + 1}
              onClick={() => setActiveatab(idx)}
              active={activeTab === idx}>
              {icon}
            </Button>
          ))}
        </LandingPageContainer>

        <LandingPageContainer>
          {elemetBtns?.map(({ title, icon }, idx) => (
            <Button className="element-btn" key={idx + 1}>
              <span>{icon}</span>
              {title}
            </Button>
          ))}
        </LandingPageContainer>
      </LandingPageToolBox>
      <LandingPageBody>
        <LandingPageEditArea></LandingPageEditArea>
        <LandingPageSideTools>
          <LandingPageSideToolsHeader></LandingPageSideToolsHeader>
          <Card className="add-element__card">
            <Tabs tabs={elementsComp} />
          </Card>
        </LandingPageSideTools>
      </LandingPageBody>
    </LandingPageWrapper>
  );
}

export default LandingPage;
