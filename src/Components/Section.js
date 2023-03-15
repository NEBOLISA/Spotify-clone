import React, { useEffect } from "react";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/Section.css";
import axios from "axios";

function Section() {
  const [{ token }, dispatch] = useServiceProviderValue();
  /* 
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/categories`,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Categories" + response.data);
      /*dispatch({
        type: "CATEGORIES",
        category: response.data.items[1].name,
      });
    };
    getCategories();
  }, [token, dispatch]);
 
  };*/
  const logout = () => {
    dispatch({
      type: "SET_TOKEN",
      token: "",
    });
  };
  return (
    <div className="section">
      <h1>Shortcuts</h1>
      <button className="logout_button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Section;
