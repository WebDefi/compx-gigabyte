import React from "react";
import './OutlinedBtn.scss'
import { Button } from 'reactstrap';
const OutlinedBtn = ({ description, img, link, article="Подробнее" }) => {
  return (
    <a href={link}><Button className="myBtn" outline color="danger" size="xl"  style={{width:"95%", borderRadius:0,}}>{article}</Button></a>
  );
};

export default OutlinedBtn;
// clip-path: polygon(100% 0,100% 28%,99% 30%,99% calc(100% - 12px),calc(99% - 14px) 100%,0 100%,0 0);
