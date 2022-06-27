import Button from 'components/atoms/Button/Button';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import styled from 'styled-components';
import DonorKpi from '../Donor';
import Emarketing from '../Emarketing';
import Fundraising from '../Fundraising';

function AddKpiModalComponent({ onClose }) {
  const tabs = [
    { title: 'DONORS', component: <DonorKpi /> },
    { title: 'FUNDRAISING', component: <Fundraising /> },
    { title: 'EMAIL MARKETING', component: <Emarketing /> }
  ];
  return (
    <AddKpiModalWrapper>
      <Tabs tabs={tabs} inline />
      <AddKpiModalFooter>
        <Button onClick={onClose} className="cancel-btn" auth invert>
          Cancel
        </Button>
        <Button className="save-btn" auth>
          Save
        </Button>
      </AddKpiModalFooter>
    </AddKpiModalWrapper>
  );
}

export default AddKpiModalComponent;

const AddKpiModalWrapper = styled.div``;

const AddKpiModalFooter = styled.div`
  display: flex;
  padding: 2.4rem;
  gap: 1.6rem;
  justify-content: flex-end;

  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
