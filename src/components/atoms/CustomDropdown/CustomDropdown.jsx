import { React } from 'react';
import { DropdownSelect, DropdownWrapper } from './styles';

const CustomDropdown = ({ data, className, ...rest }) => {
  let options = data.map((data, index) => (
    <option key={Math.random()} value={data[index]}>
      {data.name}
    </option>
  ));

  return (
    <DropdownWrapper className={className} {...rest}>
      <DropdownSelect className="select">{options}</DropdownSelect>
    </DropdownWrapper>
  );
};

export default CustomDropdown;
