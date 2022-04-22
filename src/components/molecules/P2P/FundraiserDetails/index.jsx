import { React, useRef, useState } from "react";
import FundraiserMain from "./FundraiserMain";
import { MainWrapper } from "./styles";
import VerticalTab from "components/molecules/VerticalTabs";
const FundraiserDetails = () => {
  const [activeState, setActiveState] = useState(0);
  const okref = useRef(null);
  const tabs = [
    {
      title: "P2P Fundrasier",
      component: <FundraiserMain activeState={activeState} okref={okref}/>,
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
  const gotosection = () => {
    window.scrollTo({ top: okref.current, behaviour: "smooth" });
  };
  return (
    <MainWrapper>
      <div className="vertical-wrapper">
        <VerticalTab
          tabs={tabs}
          setActiveState={setActiveState}
          className="vertical-tab-wrapper"
          verticalWrapper="vertical-tabs"
          leftBottomClass="vertical-tabs__bottom"
          setRef={gotosection()}
        >
          Pause P2P Fundraiser
        </VerticalTab>
      </div>
    </MainWrapper>
  );
};
export default FundraiserDetails;
