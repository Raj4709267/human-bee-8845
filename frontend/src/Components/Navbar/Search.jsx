import React from "react";
import { BiSearch } from "react-icons/bi";
import style from "./Navbar.module.css";
function Search() {
  return (
    <div className={style.input}>
      <input type="text" placeholder="Search" id="" />
      <BiSearch size={"1em"} />
    </div>
  );
}

export default Search;
