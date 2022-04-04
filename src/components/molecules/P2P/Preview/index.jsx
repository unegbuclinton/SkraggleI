import { React } from "react";
import { DPIconCarouselImage, DPIconProfileImage } from "icons";
import ProgressBar from "components/atoms/ProgressBar";
import Button from "components/atoms/Button/Button";
import Tabs from "components/molecules/Tabs";

import { PreviewWrapper } from "./styles";
const Preview = () => {
  const tabs = [
    {
      title: "Recent Donation",
    //   component: </>,
    },
    {
      title: "Top Particcipants",
    //   component: <ArchiveTable />,
    },
  ];
  return (
    <div>
      <PreviewWrapper>
        <div className="preview__left">
          <DPIconCarouselImage />
        </div>
        <div className="preview__right">
          <div className="preview__profile">
            <DPIconProfileImage />
            <div className="preview__profile-data">
              <div className="preview__profile">Supporter</div>
              <div className="preview__profile-name">Partho Prothim</div>
            </div>
          </div>
          <div className="preview__heading">BGA awesome campaign demo #1</div>

          <ProgressBar value={195400} target={500000} />

          <div className="preview__select-donation">
            Select Donation Amount
            <div className="preview__button-container">
              <Button className="preview__button">$10</Button>
              <Button className="preview__button">$100</Button>
              <Button className="preview__button">$500</Button>
              <Button className="preview__button">$1000</Button>
            </div>
          </div>
          <div className="preview__select-donation">
            Enter Custom Amount
            <div className="preview__input-container">
              <div className="preview__dollar">$</div>
              <input
                type="text"
                className="preview__input"
                placeholder="$2000"
              />
            </div>
          </div>
          <div className="preview__buttons-donate">
            <Button className="preview__donate-button">Donate</Button>
            <Button className="preview__fundraise-button">P2P Fundraise</Button>
          </div>
        </div>
      </PreviewWrapper>
      <Tabs tabs={tabs}></Tabs>
    </div>
  );
};

export default Preview;
