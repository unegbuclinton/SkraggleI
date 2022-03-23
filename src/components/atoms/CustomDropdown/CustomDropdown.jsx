import { React, useState } from "react";
import { DropdownWrapper, SelectWrapper } from "./styles";
import Card from "../Card/Card";

const CustomDropdown = ({ className, data, ...rest }) => {
  const [selectedData, updateSelectedData] = useState("");
  function handleChange(event) {
    updateSelectedData(event.target.value);
  }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <DropdownWrapper className={className} {...rest}>
      <SelectWrapper onChange={handleChange}>{options}</SelectWrapper>
    </DropdownWrapper>
  );
};

export default CustomDropdown;
