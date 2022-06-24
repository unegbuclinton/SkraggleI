import PropTypes from 'prop-types';
import React from 'react';
import { Fill, Input, Root, Wrapper } from './styles';

const Radio = (props) => {
  const { onChange, value, labelText, checked, name } = props;
  console.log(checked);
  return (
    <Wrapper>
      <Root {...props}>
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
      </Root>
      <span>{labelText}</span>
    </Wrapper>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string.isRequired
};

Radio.defaultProps = {
  onChange: () => {},
  value: '',
  labelText: ''
};

export default Radio;
