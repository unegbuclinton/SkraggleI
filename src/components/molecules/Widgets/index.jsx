import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import HeaderModal from "components/atoms/HeaderModal/HeaderModal";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import { WidgetBtn } from "./styles";
import { WidgetLink } from "./styles";
import { WidgetWrapper } from "./styles";

function Widget() {
  const widgets = [
    {
      id: 1,
      name: "Smart Widgets",
      path: "/widgets",
    },
    {
      id: 2,
      name: "Contacts",
      path: "/widgets",
    },
    {
      id: 3,
      name: "Fundraising",
      path: "/widgets",
    },
    {
      id: 4,
      name: "Projects",
      path: "/project",
    },
    {
      id: 5,
      name: "Forms",
      path: "/form",
    },
  ];
  return (
    <WidgetWrapper>
      <Card>
        <div className="widget-container">
          <div className="widget-links">
            {widgets.map(({ name, path, id }) => (
              <WidgetLink to={path} key={id} activeClassName="active">
                {name}
              </WidgetLink>
            ))}
          </div>

          <div className="widget-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            accusantium aut non nostrum deserunt fugiat sapiente cumque
            voluptatum saepe at.
          </div>
        </div>
        <WidgetBtn>
          <div className="btn-wrapper">
            <Button auth invert>Close</Button>
          </div>
        </WidgetBtn>
      </Card>
    </WidgetWrapper>
  );
}

export default Widget;
