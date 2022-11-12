import React from "react";
import { useSelector } from "react-redux";
import { Signup } from "../Components/Navbar/Signup";
import style from "./Css/Profile.module.css";

function Profile() {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const userData = useSelector((store) => store.AuthReducer.userData);

  if (isAuth) {
    return <div className={style.profile}>
        <h1>{`WELCOME TO YOUR ACCOUNT, ${userData.name.toUpperCase()}`}</h1>
        <p>{userData.email}</p>
        <div>
          <h1 style={{color:"red"}}>COMING SOON</h1>
        </div>
    </div>;
  }
  return (
    <div className={style.signup}>
      <h1>PLEASE LOG IN</h1>
      <p>Login to continue shopping</p>
      <img
        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1668132809~exp=1668133409~hmac=59f6dccc9de233412bba0fdae0ffe75204a42633d20ab4fd79d6008751c3c4ce"
        alt="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1668132809~exp=1668133409~hmac=59f6dccc9de233412bba0fdae0ffe75204a42633d20ab4fd79d6008751c3c4ce"
      />
      <Signup buttonName={"LOGIN"} />
    </div>
  );
}

export default Profile;
