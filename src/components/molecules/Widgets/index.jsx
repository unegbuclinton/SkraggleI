import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contacts from "../WidgetComponents/Contacts";
import Forms from "../WidgetComponents/Forms";
import FundRaise from "../WidgetComponents/Fundraise";
import Projects from "../WidgetComponents/Projects";
import SmartWidget from "../WidgetComponents/SmartWidget";
import { WidgetBtn,WidgetWrapper } from "./styles";

function Widget({onCloseWidget}) {
  const [showWidget, setShowWidget] = useState(false);

  const ChangeShowWiget = (id) => {
    setShowWidget(id);
  };
  const widgets = [
    {
      id: 1,
      name: "Smart Widgets",
      path: "/dashboard-components",
    },
    {
      id: 2,
      name: "Contacts",
      path: "/dashboard-components",
    },
    {
      id: 3,
      name: "Fundraising",
      path: "/dashboard-components",
    },
    {
      id: 4,
      name: "Projects",
      path: "/dashboard-components",
    },
    {
      id: 5,
      name: "Forms",
      path: "/dashboard-components"
    },
  ];
  return (
    <WidgetWrapper>
      <Card>
        <div className="widget-container">
          <div className="widget-links">
            {widgets.map(({ name, path, id }) => (
              <Link
                onClick={() => {
                  ChangeShowWiget(id);
                }}
                to={path}
                className={id === showWidget ? "active-widget" : "non-active-widget"}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="widget-content">
            {showWidget === 1 && <SmartWidget />}
            {showWidget === 2 && <Contacts />}
            {showWidget === 3 && <FundRaise />}
            {showWidget === 4 && <Projects />}
            {showWidget === 5 && <Forms />}
          </div>
        </div>
        <WidgetBtn>
          <div className="btn-wrapper">
            <Button className='widget-btn' onClick={onCloseWidget} auth invert>
              Close
            </Button>
          </div>
        </WidgetBtn>
      </Card>
    </WidgetWrapper>
  );
}

export default Widget;
