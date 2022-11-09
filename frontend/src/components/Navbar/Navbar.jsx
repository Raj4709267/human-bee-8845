import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BiShoppingBag, BiUser, BiHeart, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Signup } from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { logout_user } from "../../Redux/Auth/action";

function Navbar() {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const { userID } = useSelector((store) => store.AuthReducer.userData);

  const handelAdd = () => {
    dispatch({ type: "ADD", payload: 1 });
  };
  console.log(isProfile)
  return (
    <Accordion allowToggle={true}>
      <AccordionItem>
        <AccordionPanel pb={4}>
          Profile data
          <li>d</li>
          <li>f</li>
          <li>f</li>
          <li>f</li>
          <li>f</li>
          <AccordionButton onClick={() => dispatch(logout_user())}>
            Log out
          </AccordionButton>
        </AccordionPanel>
        <div className={style.navbar}>
          <div className={style.gender}>
            <Link>Women</Link>
            <Link>Men</Link>
            <Link>Kids</Link>
          </div>
          <div>
            <img src={logo} alt={logo} />
          </div>
          <div className={style.icons}>
            {isAuth ? (
              <p bg={"none"}>
                <AccordionButton background={"white"} onClick={()=>setIsProfile(!isProfile)}>
                  {" "}
                  <BiUser size={"1.5em"} />
                  {userID}
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

            <Link>
              <BiHeart size={"1.5em"} />
            </Link>
            <Link>
              <BiShoppingBag size={"1.5em"} />
            </Link>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default Navbar;
