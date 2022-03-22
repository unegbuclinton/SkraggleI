import ProgressBar from "components/atoms/ProgressBar/ProgressBar";
import React from "react";

function DummyProgress() {
  return (
    <ProgressBar
      value={300}
      target={18275}
      heading="Yearly Goals"
      raisedLabel="raised"
      targetLabel="Target"
    />
  );
}

export default DummyProgress;
