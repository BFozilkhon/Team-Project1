import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Pro } from '../../context/isopen'
import { Nav, Logo, NavItems, Bar, Bars } from "./style";

export const Navbars = () => {
  const [click] = useState(false)
  const [isOpen, setIsopen] = useContext(Pro)
  return (
    < Nav click={click} >
      <NavItems logo>
        <Link to={"/"}> <Logo click={click} />
        </Link>
      </NavItems>
      <NavItems>
        <a href="#">
          <NavItems.Text>Home</NavItems.Text>
        </a>
        <a href="#developer">
          <NavItems.Text>Developer</NavItems.Text>
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
    </Nav >
  );
};
export default Navbars;
