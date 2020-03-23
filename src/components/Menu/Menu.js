import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">&#x270d;</span>
        Log in
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">&#128395;</span>
        Edit Data
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">&#x2714;</span>
        Filter Data
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
