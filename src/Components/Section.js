import React from "react";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/Section.css";

function Section() {
  const [{ token }, dispatch] = useServiceProviderValue();
  const logout = () => {
    dispatch({
      type: "SET_TOKEN",
      token: "",
    });
  };
  return (
    <div className="section">
      <button className="logout_button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Section;
