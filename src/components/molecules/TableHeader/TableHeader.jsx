import React from "react";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Button from "components/atoms/Button/Button";
import { DPIconAdd } from "icons";
import filterData from "utilities/filterData.json";
import { HeaderWrapper } from "./styles";
import Dropdown from "components/atoms/CustomSelect/Dropdown";

function TableHeader({ title, header, setOpen, className }) {
  return (
    <HeaderWrapper>
      <h2 className={className}>{header}</h2>
      <div className="header">
        <Dropdown data={filterData} />
        <SearchBar />
        <Button className="header__header-btn" onClick={() => setOpen(true)}>
          <DPIconAdd className="header__header-btn--icon" />
          {title}
        </Button>
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
