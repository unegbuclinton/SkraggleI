import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
function ChequeInfo() {
  return (
    <ChequeWrapper>
      <ChequeContainer>
        <ChequeaLabel>CHECK/CHEQUE NUMBER</ChequeaLabel>
        <Input className="cheque-input" autoWidth />
      </ChequeContainer>
      <ChequeContainer>
        <ChequeaLabel>CHECK/CHEQUE Date</ChequeaLabel>
        <div className="date-box">
          <SelectDropDown className="cheque-dropdown" />
          <SelectDropDown className="cheque-dropdown" />
          <SelectDropDown className="cheque-dropdown" />
        </div>
      </ChequeContainer>
    </ChequeWrapper>
  );
}

export default ChequeInfo;

const ChequeWrapper = styled.div`
  background: ${COLORS.torquoise};
  padding: 1.2rem 1.4rem 1.2rem 1.2rem;
  margin-bottom: 2.4rem;
  border-radius: 0.5rem;
`;
const ChequeContainer = styled.div`
  .cheque-input {
    background: ${COLORS.white};
    margin: 1.6rem 0;
  }

  .date-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1.6rem 0;

    .cheque-dropdown {
      width: 90%;
      flex: 1;
    }
  }
`;

const ChequeaLabel = styled.label`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
`;
