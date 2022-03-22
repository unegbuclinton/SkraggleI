import { React } from "react";
import { DropdownSelect, DropdownWrapper } from "./styles";

const CustomDropdown = ({ data }) => {
  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <DropdownWrapper>
      <DropdownSelect>{options}</DropdownSelect>
    </DropdownWrapper>
  );
};

export default CustomDropdown;
