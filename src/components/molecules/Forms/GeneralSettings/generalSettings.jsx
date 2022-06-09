import React from 'react';
import styled from 'styled-components';
import GeneralSettingDonate from './generalSettingDonate';
import GeneralSettingsForm from './generalSettingsForm';

function GeneralSettingsMain() {
  return (
    <GeneralSettingWrapper>
      <GeneralSettingsForm />
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
  /* height: 770px; */
`;
