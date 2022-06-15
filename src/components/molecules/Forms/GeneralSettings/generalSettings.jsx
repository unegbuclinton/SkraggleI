import React from 'react';
import styled from 'styled-components';
import GeneralSettingDonate from './generalSettingDonate';
import GeneralSettingsForm from './generalSettingsForm';

function GeneralSettingsMain({ IncrementTab }) {
  return (
    <GeneralSettingWrapper>
      <GeneralSettingsForm IncrementTab={IncrementTab} />
      <GeneralSettingDonate />
    </GeneralSettingWrapper>
  );
}

export default GeneralSettingsMain;

export const GeneralSettingWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  padding-bottom: 12.5rem;
`;
