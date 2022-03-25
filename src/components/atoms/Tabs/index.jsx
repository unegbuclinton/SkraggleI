import { React } from "react";
import { Link } from "react-router-dom";
import { TabLinksWrapper } from "./styles";

const Tabs = ({ active, itemActive, normalLink, data, onClick }) => {
  return (
    <TabLinksWrapper>
      {data.map((link, index) => (
        <div
          id={index + 1}
          key={Math.random()}
          onClick={onClick}
          className={active === index + 1 ? itemActive : normalLink}
        >
          {link.label}
        </div>
      ))}
    </TabLinksWrapper>
  );
};

export default Tabs;
