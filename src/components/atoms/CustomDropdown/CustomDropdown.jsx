import { React } from "react";
import { DropdownWrapper } from "./styles";

const CustomDropdown = ({ data, handleChange }) => {
    // const [selectedData, updateSelectedData] = useState("");
    // function handleChange(event) {
    //   updateSelectedData(event.target.value);
    // }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    
      <DropdownWrapper onChange={handleChange}>{options}</DropdownWrapper>
    
  );
};

export default CustomDropdown;
