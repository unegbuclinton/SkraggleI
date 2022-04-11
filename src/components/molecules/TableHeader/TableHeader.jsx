import React, { useState } from "react";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Button from "components/atoms/Button/Button";
import { DPIconAdd } from "icons";
import { datas1 } from "utilities/overviewData";
import { HeaderWrapper } from "./styles";
import DropdownComponent from "components/atoms/Dropdown";

function TableHeader({ title, header, setOpen, className }) {
  const [selected, setSelected] = useState("Filters");
  return (
    <HeaderWrapper>
      <h2 className={className}>{header}</h2>
      <div className="header">
        <DropdownComponent
          selected={selected}
          setSelected={setSelected}
          data={datas1}
        />
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
