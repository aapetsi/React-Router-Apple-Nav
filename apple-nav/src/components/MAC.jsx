import React from "react";
import appleNavLinkData from "../appleNavLinkData";

let subLinks = appleNavLinkData[0].subLink;

const MAC = () => {
  return (
    <div>
      {subLinks.map(link => (
        <CardItem
          key={link.id}
          id={link.id}
          title={link.title}
          imageUrl={link.imageUrl}
          newItem={link.new}
        />
      ))}
    </div>
  );
};

const CardItem = ({ id, title, imageUrl, newItem }) => {
  return (
    <div>
      <img style={{ transform: "scale(0.5)" }} src={imageUrl} alt={id} />
      <p>{title}</p>
      {newItem && <p>New</p>}
    </div>
  );
};

export default MAC;
