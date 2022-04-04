import { React, useRef, useState } from "react";
import {
  MainWrapper,
  LeftSidebar,
  P2PFundraiserWrapper,
  RightSection,
  P2PFundraiser,
  SettingsWrapper,
} from "./styles";
import { DPIconCopy } from "icons";
import Button from "components/atoms/Button/Button";
// import CopyButton from "components/atoms/CopyButton";

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

  return (
    <MainWrapper>
      <LeftSidebar></LeftSidebar>
      <RightSection>
        <P2PFundraiserWrapper>
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
            <div className="fundraiser__col1">
              <h1 className="fundraiser__titles">Display name</h1>
              <h1 className="fundraiser__titles">Designation</h1>
              <h1 className="fundraiser__titles">Goal</h1>
              <h1 className="fundraiser__titles">Offline amount</h1>
              <h1 className="fundraiser__titles">Offline donations</h1>
              <h1 className="fundraiser__titles">Goal date</h1>
              <h1 className="fundraiser__titles">Personal message</h1>
              <h1 className="fundraiser__titles">Supporter Name</h1>
            </div>
            <div className="fundraiser__col2">
              <p className="fundraiser__p2">Leaf Inc</p>
              <p className="fundraiser__p2">Match checkout settings</p>
              <p className="fundraiser__p2">$150,000.000 USD</p>
              <p className="fundraiser__p2">$0.00 USD</p>
              <p className="fundraiser__p2">0</p>
              <p className="fundraiser__p2">Dec 15, 2021</p>
              <p className="fundraiser__p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                dignissim enim erat lacus sagittis metus. Habitant adipiscing
                aliquam.
              </p>
              <p className="fundraiser__p2">Dec 1, 2021</p>
            </div>
          </div>
        </SettingsWrapper>
      </RightSection>
    </MainWrapper>
  );
};

export default FundraiserDetails;
