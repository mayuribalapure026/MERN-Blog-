import React from 'react'
import {Navbar, TextInput} from "flowbite-react";
import {Link,useLocation} from "react-router-dom";
import { Button } from 'flowbite-react';
import {FaMoon} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";

const Header = () => {
  const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap font-semibold text-sm sm:text-xl dark:text-white">
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-white rounded-lg">Blogger's</span>
      Site
      </Link>
      <form>
        <TextInput type="text" placeholder='Search...' rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch/>
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button className="hidden sm:inline w-12 h-10" color="gray" pill>
          <FaMoon/>
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path==="/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
