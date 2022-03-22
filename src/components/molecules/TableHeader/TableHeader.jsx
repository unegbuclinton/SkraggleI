import React from "react";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Button from "components/atoms/Button/Button";
import { DPIconAdd } from "icons";
import filterData from "utilities/filterData.json";
import { HeaderWrapper } from "./styles";

function TableHeader() {
  return (
    <HeaderWrapper>
      <h2>88 Contacts</h2>
      <div className="header">
        <CustomDropdown data={filterData} />
        <SearchBar />
        <Button action className="header__header-btn">
          <DPIconAdd className="header__header-btn--icon" />
          Add Contacts
        </Button>
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
