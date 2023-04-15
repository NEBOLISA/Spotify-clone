import React from "react";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/SectionCard.css";

function SectionCard() {
  const [{ category }, dispatch] = useServiceProviderValue();
  return (
    <div className="sectionCard_div">
      {category?.map((category) => (
        <div className="sectionCard">
          <img src={category?.icons[0]?.url} alt={category?.name} />
          <p>{category?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SectionCard;
