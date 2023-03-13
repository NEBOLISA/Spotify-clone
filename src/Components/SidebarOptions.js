import React from "react";
import "./Styles/SidebarOptions.css";

function SidebarOptions({ menuName, MenuIcon }) {
  return (
    <div className="sidebarOption">
      {MenuIcon && <MenuIcon className="sidebarIcon" />}
      {menuName}
    </div>
  );
}

export default SidebarOptions;
