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
import Search from "./Search";
import { HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(value) {
    setIsOpen(value);
  }

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const { userID } = useSelector((store) => store.AuthReducer.userData);

  return (
    <Accordion allowToggle={true} className={style.navbar}>
      <AccordionItem>
        <AccordionPanel pb={4} className={style.navProfileMain}>
          <div className={style.navProfile}>
            <h1>{userID}</h1>
            <Link to="/">
              <AccordionButton> My Profile</AccordionButton>
            </Link>

            <Link>
              <AccordionButton>Details & password</AccordionButton>
            </Link>
            <Link>
              <AccordionButton>Orders & returns</AccordionButton>
            </Link>
            <Link>
              <AccordionButton>Refer a Friend</AccordionButton>
            </Link>
            <Link>
              <AccordionButton>My preferences</AccordionButton>
            </Link>
            <Link>
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
                  <p className={style.userName}>{userID}</p>
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
              <BiHeart size={"1.5em"} />
            </Link>
            <Link to="/cart">
              <BiShoppingBag size={"1.5em"} />
            </Link>
          </div>
        </div>
      </AccordionItem>
      <div className={style.menuBar}>
        <div className={style.Menu}>
          <Menu />
        </div>
        <Search />
      </div>
      <div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
    </Accordion>
  );
}

export default Navbar;
