import { React, useRef, useState } from "react";
import {
  MainWrapper,
  LeftSidebar,
  P2PFundraiserWrapper,
  RightSection,
  P2PFundraiser,
  SettingsWrapper,
  DashboardWrapper,
  VerticalTabWrapper,
  TabButton,
} from "./styles";
import VerticalTab from "components/molecules/VerticalTabs";
import { DPIconCopy } from "icons";
import Button from "components/atoms/Button/Button";
import CampaignDetails from "pages/CampaignDetails";

const FundraiserDetails = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    alert("Text Copied");
  }

  const textAreaRef1 = useRef(null);

  function copyToClipboard1(e) {
    textAreaRef1.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    alert("Text Copied");
  }

  const [activeWidget, setActiveWidget] = useState(0);

  const tabs = [
    {
      title: "P2P Fundrasier",
    },
    {
      title: "Setting",
    },
    {
      title: "Source",
    },
    {
      title: "Custom fields",
    },
    {
      title: "Donations",
    },
    {
      title: "Recurring Plans",
    },
    {
      title: "Emails",
    },
  ];

  return (
    <MainWrapper>
      <LeftSidebar>
        <VerticalTabWrapper>
          <div className="vertical-tab-wrapper">
            {tabs.map(({ title }, index) => (
              <TabButton
                key={index}
                active={activeWidget === index}
                onClick={() => setActiveWidget(index)}
              >
                {title}
              </TabButton>
            ))}
          </div>
        </VerticalTabWrapper>
      </LeftSidebar>
      <RightSection>
        <P2PFundraiserWrapper id={0}>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <p className="fundraiser__paragraph">P2P fundraiser</p>
              <h1 className="fundraiser__heading">Leaf Lnc</h1>
            </div>
            <div>
              <div className="fundraiser__id">ID</div>
              <div className="fundraiser__no">
                <textarea
                  className="fundraiser__textArea"
                  value="NRTFSTPL"
                  ref={textAreaRef}
                ></textarea>
                <Button
                  type="button"
                  className="fundraiser__copy-button"
                  onClick={copyToClipboard}
                >
                  <DPIconCopy />
                </Button>
              </div>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__info">
              <p className="fundraiser__paragraph">Status</p>
              <div className="fundraiser__active">Active</div>
            </div>
            <div className="fundraiser__info-1">
              <p className="fundraiser__paragraph">Supporter</p>
              <div className="fundraiser__active__supporter">
                Partho Prothim
              </div>
            </div>
            <div className="fundraiser__info-2">
              <p className="fundraiser__paragraph">Total raised</p>
              <div className="fundraiser__active__raised">$0.00 USD</div>
            </div>
            <div className="fundraiser__info-3">
              <p className="fundraiser__paragraph">Donations</p>
              <div className="fundraiser__active__donations">0</div>
            </div>
          </div>
        </P2PFundraiserWrapper>
        <P2PFundraiser>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">P2P Fundraiser</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Campaign</h1>
              <p className="fundraiser__p1">BGA awesome campaign demo #1</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Supporter</h1>
              <p className="fundraiser__p1">Partho Prothim</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Share link</h1>
              <div className="fundraiser__no">
                <textarea
                  className="fundraiser__textArea"
                  value="https://Commodo et non turpis et viverra risus/"
                  ref={textAreaRef1}
                ></textarea>
                <Button
                  type="button"
                  className="fundraiser__copy-button"
                  onClick={copyToClipboard1}
                >
                  <DPIconCopy />
                </Button>
              </div>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Start Date</h1>
              <p className="fundraiser__p2">Dec 1, 2021</p>
            </div>
          </div>
        </P2PFundraiser>
        <SettingsWrapper>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Settings</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Display Name</h1>
              <p className="fundraiser__p2">Leaf Inc</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Designation</h1>
              <p className="fundraiser__p2">Match checkout settings</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Goal</h1>
              <p className="fundraiser__p2">$150,000.000 USD</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Offline amount</h1>
              <p className="fundraiser__p2">$0.00 USD</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Offline donations</h1>
              <p className="fundraiser__p2">0</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Goal date</h1>
              <p className="fundraiser__p2">Dec 15, 2021</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Personal Message</h1>
              <p className="fundraiser__p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                dignissim enim erat lacus sagittis metus. Habitant adipiscing
                aliquam.
              </p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Supporter Name</h1>
              <p className="fundraiser__p2">Dec 1, 2021</p>
            </div>
          </div>
        </SettingsWrapper>
        <DashboardWrapper>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Source</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Source</h1>
              <p className="fundraiser__p2">Leaf Inc</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Dashboard</h1>
              <p className="fundraiser__p2">Mohammad Adam</p>
            </div>
          </div>
        </DashboardWrapper>
        <DashboardWrapper>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Custom Fields</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__custom-field">
              <h1 className="fundraiser__custom-title">
                There are no custom fields on the associated campaign
              </h1>
            </div>
          </div>
        </DashboardWrapper>
        <DashboardWrapper>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Donations</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__custom-field">
              <h1 className="fundraiser__donations">No Donations</h1>
            </div>
          </div>
        </DashboardWrapper>
        <DashboardWrapper>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Reccurring Plans</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__custom-field">
              <h1 className="fundraiser__donations">No Recurring Plans</h1>
            </div>
          </div>
        </DashboardWrapper>
      </RightSection>
    </MainWrapper>
  );
};

export default FundraiserDetails;
