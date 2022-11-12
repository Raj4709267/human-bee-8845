import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  BiShoppingBag,
  BiUser,
  BiHeart,
  BiChevronDown,
  BiChevronUp,
} from "react-icons/bi";
import { Signup } from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { logout_user } from "../../Redux/Auth/action";
import Menu from "./Menu";
import { HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const totalCart=""
  const totalBag=""
  function setOpen(value) {
    setIsOpen(value);
  }

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const { name } = useSelector((store) => store.AuthReducer.userData);
  const ok = useSelector((store) => store.AuthReducer.userData);
  // console.log(ok)

  return (
    <Accordion allowToggle={true} className={style.navbar}>
      <AccordionItem>
        <AccordionPanel pb={4} className={style.navProfileMain}>
          <div className={style.navProfile}>
            <h1>{name}</h1>
            <Link to="/profile">
              <AccordionButton> My Profile</AccordionButton>
            </Link>

            <Link to="/profile" >
              <AccordionButton>Details & password</AccordionButton>
            </Link>
            <Link to="/profile" >
              <AccordionButton>Orders & returns</AccordionButton>
            </Link>
            <Link to="/profile" >
              <AccordionButton>Refer a Friend</AccordionButton>
            </Link>
            <Link to="/profile" >
              <AccordionButton>My preferences</AccordionButton>
            </Link>
            <Link to="/profile" >
              <AccordionButton>Account credit</AccordionButton>
            </Link>
          </div>

          <AccordionButton onClick={() => dispatch(logout_user())}>
            Log out
          </AccordionButton>
        </AccordionPanel>
        <div className={style.navbarTop}>
          <div onClick={() => setIsOpen(true)} className={style.hamburgerIcon}>
            <HamburgerIcon boxSize={"1.5em"} />
          </div>
          <div className={style.gender}>
            <NavLink
              to="/womens"
              style={(isActive) => ({
                fontWeight: isActive.isActive ? "bold" : null,
              })}
            >
              Women
            </NavLink>
            <NavLink
              to="/mens"
              style={(isActive) => ({
                fontWeight: isActive.isActive ? "bold" : null,
              })}
            >
              Men
            </NavLink>
            <NavLink
              to="/kids"
              style={(isActive) => ({
                fontWeight: isActive.isActive ? "bold" : null,
              })}
            >
              Kids
            </NavLink>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt={logo} />
            </Link>
          </div>
          <div className={style.icons}>
            {isAuth ? (
              <p bg={"none"}>
                <AccordionButton
                  background={"white"}
                  onClick={() => setIsProfile(!isProfile)}
                >
                  {" "}
                  <BiUser size={"1.5em"} />
                  <p className={style.userName}>{name}</p>
                  {isProfile ? (
                    <BiChevronUp size={"1.5em"} />
                  ) : (
                    <BiChevronDown size={"1.5em"} />
                  )}
                </AccordionButton>
              </p>
            ) : (
              <Signup />
            )}

            <Link to="/wishlist">
              <BiHeart size={"1.5em"} /><span>{totalCart}</span>
            </Link>
            <Link to="/cart">
              <BiShoppingBag size={"1.5em"} /><span>{totalBag}</span>
            </Link>
          </div>
        </div>
      </AccordionItem>

      <Menu />

      <div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
    </Accordion>
  );
}

export default Navbar;
