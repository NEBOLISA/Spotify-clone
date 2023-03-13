import React from "react";
import profile from "../Assets/imgs/avater.png";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/SideBarProfile.css";

function SideBarProfile() {
  const [{ user }, dispatch] = useServiceProviderValue();
  return (
    <div className="sidebarProfile">
      <img
        className="profile_pic"
        src={user?.images[0]?.url ? user?.images[0]?.url : profile}
        alt=""
      />
      <h3 className="profile_name">{user?.display_name}</h3>
    </div>
  );
}

export default SideBarProfile;
