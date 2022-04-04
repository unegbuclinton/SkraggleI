import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import React from "react";
import { Attachwrapper } from "./styles";

function Attachment({onClose}) {
  return (
    <Attachwrapper>
      <Card className="attach-card">
        <p className="attatch-text">Attachments </p>

        <Button className="attach-btn" auth>
          Upload files
        </Button>

        <div className="attach-footer">
          <Button invert auth className="attach-cancel-btn" onClick={onClose}>
            Cancel
          </Button>
          <Button auth className="attach-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </Attachwrapper>
  );
}

export default Attachment;
