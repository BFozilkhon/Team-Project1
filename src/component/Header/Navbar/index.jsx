import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, NavItems, Bar, Bars } from "./style";

export const Navbars = ({ isOpen, setIsopen, click, setClick }) => {
  return (
    <Nav click={click}>
      <NavItems logo>
        <Logo click={click} />
      </NavItems>
      <NavItems>
        <a href="#home">
          <NavItems.Text>Home</NavItems.Text>
        </a>
        <a href="#developer">
          <NavItems.Text>Developer</NavItems.Text>
        </a>
        <a href="#creator">
          <NavItems.Text>Creator</NavItems.Text>
        </a>
        <a href="#ecosystem">
          <NavItems.Text>Ecosystem</NavItems.Text>
        </a>
        <a href="#about">
          <NavItems.Text>About us</NavItems.Text>
        </a>
        <a href="#recourses">
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
