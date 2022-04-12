import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, NavItems, Bar, Bars } from "./style";

export const Navbars = ({ isOpen, setIsopen, click, setClick }) => {
  return (
    <Nav click={click}>

      <NavItems logo><Logo click={click} /></NavItems>
      <NavItems>
        <NavItems.Text>Home</NavItems.Text>
        <NavItems.Text>Developer</NavItems.Text>
        <NavItems.Text>Creator</NavItems.Text>
        <NavItems.Text>Ecosystem</NavItems.Text>
        <NavItems.Text>About us</NavItems.Text>
        <NavItems.Text>Resources</NavItems.Text>
        <Link to={"/white-paper"}>
          <NavItems.Btn>Whitepaper</NavItems.Btn>
        </Link >
      </NavItems>
      <Bar onClick={() => setIsopen(!isOpen)}>
        <Bars a={isOpen} />
        <Bars b={isOpen} />
        <Bars c={isOpen} />
      </Bar>
    </Nav >

  );
};
export default Navbars;
