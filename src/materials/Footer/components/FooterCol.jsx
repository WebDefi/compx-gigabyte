import React from "react";

const FooterCol = ({ nav="item", link = "/" }) => {
  return (
    <li >
      <a style={{color:"#fff",}} href={link}>{nav}</a>
    </li>
  );
};

export default FooterCol;
