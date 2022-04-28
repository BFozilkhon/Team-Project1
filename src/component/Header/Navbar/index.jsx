import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Logo, NavItems, Bar, Bars } from "./style";

export const Navbars = ({ isOpen, setIsopen, click, setClick }) => {
  const navigate = useNavigate();
  return (
    <Nav click={click}>
      <NavItems logo>
        <Link to={"/"}>
          <Logo click={click} />
        </Link>
      </NavItems>
      <NavItems>
        <a onClick={() => navigate("/")} href="#home">
          <NavItems.Text>Home</NavItems.Text>
        </a>
        <a onClick={() => navigate("/")} href="#developer">
          <NavItems.Text>Developer</NavItems.Text>
        </a>
        <a onClick={() => navigate("/")} href="#creator">
          <NavItems.Text>Creator</NavItems.Text>
        </a>
        <a onClick={() => navigate("/")} href="#ecosystem">
          <NavItems.Text>Ecosystem</NavItems.Text>
        </a>
        <a onClick={() => navigate("/")} href="#about">
          <NavItems.Text>About us</NavItems.Text>
        </a>
        <a onClick={() => navigate("/")} href="#recourses">
          <NavItems.Text>Resources</NavItems.Text>
        </a>
        <Link to={"/white-paper"}>
          <NavItems.Btn>Whitepaper</NavItems.Btn>
        </Link>
      </NavItems>
      <Bar onClick={() => setIsopen(!isOpen)}>
        <Bars a={isOpen} />
        <Bars b={isOpen} />
        <Bars c={isOpen} />
      </Bar>
    </Nav>
  );
};
export default Navbars;
