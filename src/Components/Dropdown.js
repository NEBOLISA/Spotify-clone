import React, { useEffect, useState } from "react";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/Dropdown.css";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import AccountCircle from "@material-ui/icons/AccountCircle";
function Dropdown({ options }) {
  const [{ user }, dispatch] = useServiceProviderValue();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const Logout = () => {
    dispatch({
      type: "SET_TOKEN",
      token: "",
    });
  };
  return (
    <div className="dropdown_div" onClick={handleInputClick}>
      <div className="dropdown_icon_div">
        {user?.images[0]?.url ? (
          <img src={user?.images[0]?.url} alt="" />
        ) : (
          <AccountCircle />
        )}

        <p>{user?.display_name}</p>
        <ArrowDropDown className="arrow_down" />
      </div>
      {showMenu && (
        <div className="dropdown_menu">
          {options.map((option) => {
            if (option.value === "Logout") {
              return (
                <div onClick={Logout} key={option.id} className="dropdown_item">
                  {option.value}
                </div>
              );
            } else {
              return (
                <div key={option.id} className="dropdown_item">
                  {option.value}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
