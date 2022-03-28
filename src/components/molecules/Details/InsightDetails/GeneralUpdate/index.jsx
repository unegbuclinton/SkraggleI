import React from "react";
import {
  GeneralUpdateHeading,
  GeneraUpdateWrapper,
  UpdateContainer,
  UpdateContent,
} from "./styles";

function GeneralUpdate() {
  return (
    <GeneraUpdateWrapper>
      <GeneralUpdateHeading>
        <h1 className="heading">General Update</h1>
      </GeneralUpdateHeading>
      <UpdateContainer>
        <UpdateContent>
          <h2 className="digit">$25,200</h2>
          <p className="text">DONATIONS</p>
        </UpdateContent>
        <UpdateContent>
          <h2 className="digit">$477</h2>
          <p className="text">REVENUE</p>
        </UpdateContent>
        <UpdateContent>
          <h2 className="digit">14hr</h2>
          <p className="text">VOLUNTEERING</p>
        </UpdateContent>
      </UpdateContainer>
    </GeneraUpdateWrapper>
  );
}

export default GeneralUpdate;
