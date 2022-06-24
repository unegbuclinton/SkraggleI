import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
// import { addPledge, getPledge } from 'features/donation/donationSlice';

import { React, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';
// import { CreatePledgeSchema } from 'validation/Schema';

function RenderComponent(Components, IncrementTab, DecrementTab, formik) {
  return <Components IncrementTab={IncrementTab} DecrementTab={DecrementTab} formik={formik} />;
}
function MultiformTabs({ disabled, tabs, ...rest }) {
  const [activeTab, setActiveTab] = useState(0);

  function IncrementTab() {
    setActiveTab((prev) => prev + 1);
  }

  function DecrementTab() {
    setActiveTab((prev) => prev - 1);
  }

  // const formik = useFormik({
  //   initialValues: {
  //     contact_id: '',
  //     pledge_name: '',
  //     value_donation: '',
  //     pledge_type: '',
  //     start_date: '',
  //     end_date: '',
  //     attachment: [],
  //     expected_date: [],
  //     amount: '',
  //     interval: '',
  //     campaign_id: '',
  //     impact_area: '',
  //     source: '',
  //     keywords: [],
  //     dedication: '',
  //     notes: '',
  //     amount_currency: ''
  //   },
  //   validationSchema: CreatePledgeSchema,

  //   onSubmit: (values) => {
  //     const body = {
  //       contact_id: values.contact_id,
  //       campaign_id: values.campaign_id,
  //       name: values.pledge_name,
  //       amount: values.value_donation,
  //       start_date: values.start_date,
  //       end_date: values.end_date,
  //       type: values.pledge_type,
  //       payment_interval: values.interval,
  //       // impact_area: null,
  //       // keywords: "",
  //       // source: ,
  //       dedication: values.dedication,
  //       notes: values.notes,
  //       amount_currency: values.amount_currency
  //     };
  //     dispatch(addPledge(body)).then(() => {
  //       onClose();
  //       dispatch(getPledge());
  //       toast.success('Pledge added successfully');
  //     });
  //   }
  // });

  return (
    <>
      <TabContainer {...rest}>
        {tabs?.map((tab, index) => (
          <TabButton
            key={index}
            disabled={disabled}
            active={activeTab >= index}
            onClick={() => {
              setActiveTab(index);
            }}>
            {tab.name}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>
        {tabs &&
          RenderComponent(
            tabs[activeTab]?.component,
            IncrementTab,
            DecrementTab,
            tabs[activeTab]?.props.formik
          )}
      </TabContent>
    </>
  );
}

export default MultiformTabs;

const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3.2rem 0 0.7rem 0;
`;
const TabButton = styled.button`
  width: 100%;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  border: none;
  position: relative;
  background: transparent;
  border-bottom: 2px solid ${COLORS.torquoise};
  color: ${COLORS['grey-400']};
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    background: ${COLORS.pink};
    bottom: -0.3rem;
    z-index: 100;
    left: 0;
    transition: 0.3s;
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.pink};
      cursor: default;
      &::after {
        width: 100%;
        transition: 0.3s;
      }
    `};
`;
const TabContent = styled.div``;
