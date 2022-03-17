import { React, useState } from "react";
import { DropdownWrapper } from "./styles";

const CustomDropdown = ({props, ...rest }) => {
  const data = [
    {
      id: "1",
      name: "Filters",
    },
    {
      id: "2",
      name: "Two",
    },
    {
      id: "3",
      name: "Three",
    },
    {
      id: "4",
      name: "Four",
    },
  ];

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
    <div>
      <DropdownWrapper onChange={handleChange}>
        {options}
      </DropdownWrapper>
    </div>
  );
};

export default CustomDropdown;
