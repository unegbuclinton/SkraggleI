import PropTypes from 'prop-types';
import React from 'react';
import { Fill, Input, Label, Root } from './styles';

const Radio = (props) => {
  const { onChange, value, labelText, checked, name } = props;

  return (
    <Root {...props}>
      <Label>
        <span className="label-text">{labelText}</span>
        <span>
          <Input
            type="radio"
            onChange={onChange}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fill />
        </span>
      </Label>
    </Root>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  onChange: () => {},
  value: '',
  labelText: '',
};

export default Radio;
