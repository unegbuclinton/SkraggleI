import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Radio from '../Radio';

const RadioGroupWrapper = (props) => {
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

RadioGroupWrapper.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

RadioGroupWrapper.defaultProps = {
  name: '',
  selectedValue: '',
  Component: 'div',
};

const RadioGroup = ({ groupName, radioData, size }) => {
  const [state, setState] = useState({ selectedValue: '' });
  const onClickRadioButton = (selectedValue) => setState({ selectedValue });

  return (
    <RadioGroupWrapper
      name={groupName}
      onClickRadioButton={onClickRadioButton}
      selectedValue={state.selectedValue}
    >
      {/* <Radio value="autoscale" labelText="Autoscale" />
      <Radio value="manual" labelText="Manual" /> */}

      {radioData.map((curr, index) => {
        return (
          <Radio
            key={curr?.value + index}
            value={curr.value}
            labelText={curr.labelText}
          />
        );
      })}
    </RadioGroupWrapper>
  );
};

RadioGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  radioData: PropTypes.arrayOf(PropTypes.object),
};

export default RadioGroup;
