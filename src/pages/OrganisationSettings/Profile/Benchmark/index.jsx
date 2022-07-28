import Button from 'components/atoms/Button/Button';
import React from 'react';
import { PersonalInfoContainer, PersonalInfoHeading, PersonalInfoWrapper } from './styles';

function Benchmark() {
  return (
    <PersonalInfoWrapper>
      <PersonalInfoHeading>
        <h1 className="heading">Benchmark</h1>
        <Button className="info-btn">Edit</Button>
      </PersonalInfoHeading>
      <PersonalInfoContainer>
        <h2 className="info">CAUSE AREA</h2>
        <h2 className="title">Art, Culture & Humanities</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">ORGANIZATION REVENUE SIZE</h2>
        <h2 className="title">-</h2>
      </PersonalInfoContainer>
    </PersonalInfoWrapper>
  );
}

export default Benchmark;
