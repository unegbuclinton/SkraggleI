import { React } from "react";
import { Link } from "react-router-dom";
import { TabLinksWrapper } from "./styles";

const Tabs = ({ active, itemActive, normalLink, data, onClick }) => {
  return (
    <TabLinksWrapper>
      {data.map((link, index) => (
        <Link
          id={index + 1}
          key={Math.random()}
          onClick={onClick}
          className={active === index + 1 ? itemActive : normalLink}
          to={link.path}
        >
          {link.label}
        </Link>
      ))}
    </TabLinksWrapper>
  );
};

export default Tabs;
