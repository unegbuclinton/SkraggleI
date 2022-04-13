import { React, useState } from "react";
import FundraiserMain from "./FundraiserMain";
import { MainWrapper } from "./styles";
import VerticalTab from "components/molecules/VerticalTabs";

const FundraiserDetails = () => {
  const [activeState, setActiveState] = useState(0);

  const tabs = [
    {
      title: "P2P Fundrasier",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Setting",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Source",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Custom fields",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Donations",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Recurring Plans",
      component: <FundraiserMain activeState={activeState} />,
    },
    {
      title: "Emails",
      component: <FundraiserMain activeState={activeState} />,
    },
  ];

  return (
    <MainWrapper>
      <div className="vertical-wrapper">
        <VerticalTab
          tabs={tabs}
          setActiveState={setActiveState}
          className="vertical-tab-wrapper"
          verticalWrapper="vertical-tabs"
        >
          <div className="vertical-tabs__bottom" >
            Pause P2P Fundraiser
          </div>
        </VerticalTab>
      </div>
    </MainWrapper>
  );
};

export default FundraiserDetails;
