import { COLORS } from 'constants/colors';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';
function PhoneNumberInput({ value, onChange, name, className }) {
  return (
    <div>
      <PhoneNumber
        className={className}
        country={'af'}
        value={value}
        onChange={(phone) => onChange(name, phone)}
      />
    </div>
  );
}

export default PhoneNumberInput;

const PhoneNumber = styled(PhoneInput)`
  position: relative;
  .form-control {
    height: 4.4rem !important;
    width: 100% !important;
    border: 0.1rem solid ${COLORS['gray-500']} !important;
  }
  .flag-dropdown {
    border: 0.1rem solid ${COLORS['gray-500']} !important;
  }
  .country-list {
    width: 60.2rem;
  }
`;
