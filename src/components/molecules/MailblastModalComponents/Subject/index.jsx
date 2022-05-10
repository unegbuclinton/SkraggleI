import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import { SubjectWrapper, SubjectLabel } from './styles';

function Subject({ onClose }) {
  return (
    <SubjectWrapper>
      <Card className="subject-card">
        <div>
          <SubjectLabel> Subject</SubjectLabel>
          <Input className="subject-input" />
        </div>
        <div>
          <SubjectLabel> Preview Text</SubjectLabel>
          <Input className="subject-input" />
        </div>

        <div className="subject-footer">
          <Button invert auth className="subject-cancel-btn" onClick={onClose}>
            Cancel
          </Button>
          <Button auth className="subject-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </SubjectWrapper>
  );
}

export default Subject;
