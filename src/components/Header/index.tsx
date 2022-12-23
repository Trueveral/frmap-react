import React from "react";
import "./index.less";

const Header: React.FC<{
  title: string;
  subtitle: string;
  description: string;
}> = ({ title, subtitle, description }) => (
  <div className="titles">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
    <div className="description">{description}</div>
  </div>
);

export default Header;
