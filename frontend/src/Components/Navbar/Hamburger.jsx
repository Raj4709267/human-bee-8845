import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navbarCss from "../Navbar/Navbar.module.css";
// import Logo from "./Logo";

export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();
  const { userID } = useSelector((store) => store.AuthReducer.userData);

  function onClose() {
    setOpen(false);
  }

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"black"} />
          <DrawerHeader bgColor={"#ffff"} borderBottom="1px solid #a9a9a9">
            <div className={navbarCss.logoH}>
              {/* <Logo /> */}
              <img
                width={"40px"}
                src="https://cdn-static.farfetch-contents.com/assets/portal-core-portal/static/images/favicon/Farfetch/apple-touch-icon-180x180.png"
                alt="https://cdn-static.farfetch-contents.com/assets/portal-core-portal/static/images/favicon/Farfetch/apple-touch-icon-180x180.png"
              />
              {userID && <p>{`Hi.. ${userID}`}</p>}
            </div>
          </DrawerHeader>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              to="/wishlist"
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "15px",
              }}
              onClick={() => onClose()}
            >
              Your Cart <BiHeart size={"1.5em"} />
            </Link>{" "}
            <Link
              to={"/cart"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "15px",
              }}
              onClick={() => onClose()}
            >
              Your bag <BiShoppingBag size={"1.5em"} />
            </Link>
          </div>

          <DrawerBody padding="0">
            <div className={navbarCss.Hamburger}>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> 22% Off</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Gifts</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> New In</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                {" "}
                <div onClick={() => onClose()}>
                  <p> Brnads</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Clothing</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Shoes</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Sneakers</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Bags</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Accessories</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Watches</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"}>
                <div onClick={() => onClose()}>
                  <p> Sale</p>
                  <ChevronRightIcon />
                </div>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
