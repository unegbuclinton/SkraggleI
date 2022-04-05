import { COLORS } from 'constants/colors';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

export const RadioGroup = (props) => {
  const {
    Component,
    name,
    selectedValue,
    onClickRadioButton,
    children,
    ...rest
  } = props;
  return (
    <Component role="radiogroup" {...rest} name={name}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          ...element.props,
          checked: selectedValue === element.props.labelText,
          onChange: () => onClickRadioButton(element.props.labelText),
          name,
        })
      )}
    </Component>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

RadioGroup.defaultProps = {
  name: '',
  selectedValue: '',
  Component: 'div',
};

export const Radio = (props) => {
  const { onChange, value, labelText, checked, name } = props;

  return (
    <Root>
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
        {/* <div style={{ marginLeft: '25px' }}>{labelText}</div> */}
      </Label>
    </Root>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string,
};

Radio.defaultProps = {
  onChange: () => {},
  value: '',
  labelText: '',
};

const Label = styled.label`
  .label-text {
    display: inline-flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }
`;

const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: ${(props) => (props.size ? props.size : 20)}px;
  height: ${(props) => (props.size ? props.size : 20)}px;
  /* display: flex;
  align-items: center; */
  position: relative;
  label {
    margin-left: 25px;
  }
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid
      ${(props) => (props.borderColor ? props.borderColor : '#DDD')};
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#FAFAFA'};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Fill = styled.div`
  background: ${(props) => (props.fillColor ? props.fillColor : `${COLORS['check-green']}`)};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid
      ${(props) => (props.borderActive ? props.borderActive : `${COLORS['check-green']}`)};
    border-radius: 100%;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;

export const RadioTest = () => {
  const [state, setState] = useState({ selectedValue: '' });
  const onClickRadioButton = (selectedValue) => setState({ selectedValue });

  return (
    <RadioGroup
      name="setYAxis"
      onClickRadioButton={onClickRadioButton}
      selectedValue={state.selectedValue}
    >
      <Radio value="autoscale" labelText="Autoscale" />
      <Radio value="manual" labelText="Manual" />
    </RadioGroup>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
