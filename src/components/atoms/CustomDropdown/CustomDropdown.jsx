import { React } from "react";
import { DropdownSelect, DropdownWrapper } from "./styles";

const CustomDropdown = ({ data, className, ...rest }) => {
  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
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
