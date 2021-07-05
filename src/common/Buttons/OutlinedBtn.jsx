import React from "react";

import { Button } from 'reactstrap';
const NewsComponent = ({ description, img, link, article="more.." }) => {
  return (
    <a href={link}><Button outline color="warning" size="sm">{article}</Button></a>
  );
};

export default NewsComponent;
// clip-path: polygon(100% 0,100% 28%,99% 30%,99% calc(100% - 12px),calc(99% - 14px) 100%,0 100%,0 0);
