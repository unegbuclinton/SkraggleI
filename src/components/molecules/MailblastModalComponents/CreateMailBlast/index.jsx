import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import { Category, Partho, Search } from 'utilities/maildatas';
import { CreateLabel, CreateMailWrapper } from './styles';

function CreateMailBlast({ onCloseModal }) {
  return (
    <CreateMailWrapper>
      <Card className="edit-card">
        <div className="edit-mail-body">
          <div className="field-container">
            <CreateLabel>Mail Blasts Name</CreateLabel>
            <Input className="edit-input" />
          </div>
          <div className="field-container">
            <CreateLabel>Category</CreateLabel>
            <CustomDropdown className="edit-dropdown" data={Category} />
          </div>
          <div className="field-container">
            <CreateLabel>Assignee</CreateLabel>
            <CustomDropdown className="edit-dropdown" data={Partho} />
          </div>
          <div className="field-container">
            <CreateLabel>Campaign</CreateLabel>
            <CustomDropdown className="edit-dropdown" data={Search} />
          </div>
        </div>
        <div className="edit-mail-footer">
          <Button invert auth className="edit-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button auth className="edit-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </CreateMailWrapper>
  );
}

export default CreateMailBlast;
