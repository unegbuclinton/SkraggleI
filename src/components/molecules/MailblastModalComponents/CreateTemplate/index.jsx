import React from "react";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";
import Card from "components/atoms/Card";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

function CreateTemplate({ onCloseModal }) {
  return (
    <CreateTemplateWrapper>
      <Card className="template-card">
        <div className="template-container">
          <CreateTemplateLabel>Template Name</CreateTemplateLabel>
          <Input className="template-input" />
        </div>

        <div className="template-footer">
          <Button
            invert
            auth
            className="template-cancel-btn"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button auth className="template-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </CreateTemplateWrapper>
  );
}

export default CreateTemplate;

const CreateTemplateWrapper = styled.div`
  padding: 3.2rem 2.4rem 2.455rem 2.4rem;

  .template-input {
    width: 60.2rem;
    height: 6.4rem;
    padding-left: 1.6rem;
    background-color: transparent;
    border: 1px solid ${COLORS["gray-500"]};
    margin-top: 0.8rem;
  }

  .template-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    margin-top: 10.8rem;

    .template-cancel-btn {
      width: 10.7rem;
      height: 5.1rem;
    }
    .template-save-btn {
      width: 20.5rem;
      height: 5.1rem;
    }
  }
`;

const CreateTemplateLabel = styled.label`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS["black-shade"]};
`;
