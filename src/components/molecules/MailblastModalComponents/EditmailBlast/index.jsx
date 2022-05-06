import React from 'react';
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import Input from 'components/atoms/Input/Input';
import { Category, Campaign, Assignee } from 'utilities/maildatas';
import { EditMailWrapper, EditLabel } from './styles';

function EditMailBlast() {
  return (
    <EditMailWrapper>
      <Card className="edit-card">
        <div className="edit-mail-body">
          <div className="field-container">
            <EditLabel>Mail Blasts Name</EditLabel>
            <Input className="edit-input" />
          </div>
          <div className="field-container">
            <EditLabel>Category</EditLabel>
            <CustomDropdown className="edit-dropdown" data={Category} />
          </div>
          <div className="field-container">
            <EditLabel>Assignee</EditLabel>
            <CustomDropdown className="edit-dropdown" data={Assignee} />
          </div>
          <div className="field-container">
            <EditLabel>Campaign</EditLabel>
            <CustomDropdown className="edit-dropdown" data={Campaign} />
          </div>
        </div>
        <div className="edit-mail-footer">
          <Button invert auth className="edit-cancel-btn">
            Cancel
          </Button>
          <Button auth className="edit-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </EditMailWrapper>
  );
}

export default EditMailBlast;
