import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { DPIconUploadFile } from 'icons';
import React from 'react';
import {
  InteractionInputWrapper,
  InteractionLabel,
  InteractionTextarea,
  InteractionWrapper
} from './styles';

function InteractionComponent() {
  return (
    <InteractionWrapper>
      <Card className="interaction-card">
        <InteractionInputWrapper>
          <InteractionLabel>Type </InteractionLabel>
          <SelectDropDown className="interaction-select" />
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Date </InteractionLabel>
          <Input type="date" autoWidth className="interaction-input" />
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Subject </InteractionLabel>
          <Input autoWidth className="interaction-input" />
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Description </InteractionLabel>
          <InteractionTextarea />
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Attachment </InteractionLabel>
          <div className="upload-icon">
            <DPIconUploadFile />
          </div>
        </InteractionInputWrapper>

        <InteractionInputWrapper>
          <Checkbox
            label=" More contacts are involved in this interaction "
            className="interaction-checkbox"
          />
          <Checkbox label="  Add To-do " className="interaction-checkbox" />
        </InteractionInputWrapper>
        <div className="interaction__footer">
          <Button invert auth className="interaction__cancel-btn">
            Cancel
          </Button>
          <Button type="submit" auth className="interaction__save-btn">
            Save
          </Button>
        </div>
      </Card>
    </InteractionWrapper>
  );
}

export default InteractionComponent;
