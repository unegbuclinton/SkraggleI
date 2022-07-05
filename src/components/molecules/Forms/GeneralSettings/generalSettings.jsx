import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GeneralSettingDonate from './generalSettingDonate';
import GeneralSettingsForm from './generalSettingsForm';

function GeneralSettingsMain({ IncrementTab }) {
  // const { formsByID } = useSelector((state) => state.forms);
  // const { name, id } = formsByID;
  // console.log(name);

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
`;
