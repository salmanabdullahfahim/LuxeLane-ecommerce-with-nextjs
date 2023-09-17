import React from "react";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center justify-between md:justify-start md:gap-x-5">
        <Logo />
      </Container>
    </div>
  );
};

export default Header;
