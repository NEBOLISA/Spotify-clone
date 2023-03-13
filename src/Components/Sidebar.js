import React from "react";
import "./Styles/Sidebar.css";
import logo from "../Assets/imgs/logo2.png";
import SidebarOptions from "./SidebarOptions";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocalActivityOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import SideBarProfile from "./SideBarProfile";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={logo} alt="" />
      <SidebarOptions MenuIcon={HomeOutlinedIcon} menuName="Home" />
      <SidebarOptions MenuIcon={TrendingUpIcon} menuName="Trends" />
      <SidebarOptions MenuIcon={ExploreOutlinedIcon} menuName="Feed" />
      <h5 className="menuHeading">Discover</h5>
      <SidebarOptions
        MenuIcon={DashboardOutlinedIcon}
        menuName="New and Notable"
      />
      <SidebarOptions
        MenuIcon={DateRangeOutlinedIcon}
        menuName="Release Calendar"
      />
      <SidebarOptions MenuIcon={LocalActivityOutlinedIcon} menuName="Events" />
      <h5 className="menuHeading">Your Collection</h5>
      <SidebarOptions
        MenuIcon={FavoriteBorderOutlinedIcon}
        menuName="Favourite Songs"
      />
      <SidebarOptions MenuIcon={PeopleOutlinedIcon} menuName="Artist" />
      <SidebarOptions MenuIcon={StarBorderOutlinedIcon} menuName="Albums" />
      <hr />
      <SideBarProfile />
    </div>
  );
}

export default Sidebar;
