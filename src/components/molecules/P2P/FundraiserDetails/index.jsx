import { React, useRef, useState } from 'react';
import FundraiserMain from './FundraiserMain';
import { MainWrapper } from './styles';
import VerticalTab from 'components/molecules/VerticalTabs';
const FundraiserDetails = () => {
  const [activeState, setActiveState] = useState(0);
  const mainref = useRef(null);

  const tabs = [
    {
      title: 'P2P Fundrasier',
      component: <FundraiserMain activeState={activeState} />
    },
    {
      title: 'Setting',
      component: <FundraiserMain activeState={activeState} />
    },
    {
      title: 'Source',
      component: <FundraiserMain activeState={activeState} />,
      props: { activeState: activeState, ref: mainref }
    },
    {
      title: 'Custom fields',
      component: <FundraiserMain activeState={activeState} />,
      props: { activeState: activeState, ref: mainref }
    },
    {
      title: 'Donations',
      component: <FundraiserMain activeState={activeState} />
    },
    {
      title: 'Recurring Plans',
      component: <FundraiserMain activeState={activeState} />
    },
    {
      title: 'Emails',
      component: <FundraiserMain activeState={activeState} />
    }
  ];
  const scrollToRef = (targetref) => {
    // console.log(ref);
    // mainref.current = ref;
    // console.log(mainref);
    // window.scrollTo({
    //  top : mainref.current.offsetTop,
    //  behavior: "smooth"
    // })
    console.log(targetref);
    mainref.current.scrollIntoView({ behavior: 'smooth' });
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
          setRef={scrollToRef}
        >
          Pause P2P Fundraiser
        </VerticalTab>
      </div>
    </MainWrapper>
  );
};
export default FundraiserDetails;
