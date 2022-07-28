import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
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
import EditorApp from '../LandingPageDropDown/EditorApp';
import {
  LandingPageBody,
  LandingPageContainer,
  LandingPageEditArea,
  LandingPageSideTools,
  LandingPageSideToolsHeader,
  LandingPageToolBox,
  LandingPageWrapper
} from './styles';

function LandingPageComponent() {
  const [activeTab, setActivetab] = useState(0);
  const [activeRightTab, setActiveRighTab] = useState(0);

  const [showEditApp, setShowEditApp] = useState(false);

  console.log(activeRightTab);
  const toolsBtns = [
    {
      icon: <DPIconDesktop />,
      onClick: () => {}
    },
    {
      icon: <DPIconMobileTool />,
      onClick: () => {}
    },
    {
      icon: <DPIconConnect />,
      onClick: () => {
        setShowEditApp((prev) => !prev);
      }
    },
    {
      icon: <DPIconPalleteSetting />,
      onClick: () => {}
    },
    {
      icon: <DPIconPopIcon />,
      onClick: () => {}
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
      {showEditApp && <EditorApp />}
      <LandingPageToolBox>
        <LandingPageContainer>
          <Button className="exit-btn">Exit</Button>
          {toolsBtns?.map(({ icon, onClick }, idx) => (
            <Button
              className={`tool-btn ${activeTab === idx ? 'active' : ''}`}
              key={idx + 1}
              onClick={() => {
                setActivetab(idx);
                onClick();
              }}>
              {icon}
            </Button>
          ))}
        </LandingPageContainer>

        <LandingPageContainer>
          {elemetBtns?.map(({ title, icon }, idx) => (
            <Button
              className={`element-btn ${activeRightTab === idx ? 'active' : ''}`}
              key={idx + 1}
              onClick={() => {
                setActiveRighTab(idx);
              }}>
              <span>{icon}</span>
              {title}
            </Button>
          ))}
        </LandingPageContainer>
      </LandingPageToolBox>
      <LandingPageBody>
        <LandingPageEditArea></LandingPageEditArea>
        <LandingPageSideTools>
          <LandingPageSideToolsHeader>Elements</LandingPageSideToolsHeader>
          <Card className="add-element__card">
            <Tabs tabs={elementsComp} />
          </Card>
        </LandingPageSideTools>
      </LandingPageBody>
    </LandingPageWrapper>
  );
}

export default LandingPageComponent;
