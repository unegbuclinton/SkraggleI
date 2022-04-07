import RadioGroup from 'components/atoms/RadioGroup';
import React from 'react';

const Test = () => {
  return (
    <div>
      {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Radio value="any" name="radio-test" labelText="Hellp" />
          <Radio value="all" name="radio-test" />
          <Radio value="which" name="radio-test" />
          <Radio value="where" name="radio-test" />
        </div> */}
      <RadioGroup
        groupName="Set Axis"
        radioData={[
          {
            value: 'autoscale',
            labelText: 'I receive emails more ofter than I expected',
          },
          { value: 'manual', labelText: 'Manual' },
        ]}
      />
      {/* <Checkbox label="Clinton" /> */}
    </div>
  );
};

export default Test;
