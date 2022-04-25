import React from "react";
import DropdownComponent from "components/atoms/Dropdown";
import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import data from "utilities/filterData.json";
import Card from "components/atoms/Card";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

function RecurringAssociation({ DecrementTab }) {
  return (
    <AssociationWrapper>
      <Card className="association-card">
        <AssociationLabel>
          <p className="association-label">Impact Area</p>
          <DropdownComponent className="association-dropdown" data={data} />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Campaign</p>
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
        <AssociationLabel>
          <p className="association-label">Dedication</p>
          <Input className="association-input" />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Notes</p>
          <TextArea />
        </AssociationLabel>

        <div className="association-footer">
          <Button
            invert
            auth
            className="association-cancel-btn"
            onClick={DecrementTab}
          >
            Back
          </Button>
          <Button auth className="association-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </AssociationWrapper>
  );
}

export default RecurringAssociation;

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
  .association-input {
    width: 60.2rem;
    height: 6.4rem;
    border: 1px solid ${COLORS["moore-grey"]};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
    background-color: transparent;
  }
`;

const TextArea = styled.textarea`
  width: 60.2rem;
  height: 11.8rem;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  border: 1px solid ${COLORS["moore-grey"]};
  padding: 1rem;
`;
