import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import DropdownComponent from "components/atoms/Dropdown";
import Input from "components/atoms/Input/Input";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React, { useState } from "react";
import styled from "styled-components";
import data from "utilities/filterData.json";

function DonationAssociation() {
  const [selected, setSelected] = useState("Filters");
  return (
    <AssociationWrapper>
      <Card className="association-card">
        <AssociationLabel>
          <p className="association-label">Pledge</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Campaign</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Impact Area</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Soft Credit</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Source</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Keywords</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>

        <AssociationInput>
          <p className="association-label">Dedication</p>
          <Input className="association-input" />
        </AssociationInput>
        <AssociationInput>
          <p className="association-label">Notes</p>
          <Input className="association-input" />
        </AssociationInput>

        <div className="association-footer">
          <Button invert auth className="association-cancel-btn">
            Cancel
          </Button>
          <Button auth className="association-save-btn">
            Next
          </Button>
        </div>
      </Card>
    </AssociationWrapper>
  );
}

export default DonationAssociation;

const AssociationWrapper = styled.div`
  .association-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    .association-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 10.8rem;

      .association-cancel-btn {
        width: 10.7rem;
        height: 5.1rem;
      }
      .association-save-btn {
        width: 20.5rem;
        height: 5.1rem;
      }
    }
  }
`;
const AssociationLabel = styled.div`
  .association-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["grey-500"]};
  }
  .association-dropdown {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS["moore-grey"]};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
  }
`;

const AssociationInput = styled.div`
  .association-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["grey-500"]};
  }
  .association-input {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS["moore-grey"]};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
    background-color: transparent;
  }
`;
