import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signin_failure,
  signin_request,
  signin_success,
  signup_failure,
  signup_request,
  signup_success,
} from "../../Redux/Auth/action";

function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signin, setSignin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [show, setShow] = React.useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess,setIsSuccess] =useState(false);
  const handleClick = () => setShow(!show);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const { isLoading, isAuth } = useSelector((store) => store.AuthReducer);

  const handelSignin = async () => {
    const payload = { email, password };
    console.log(payload);
    dispatch(signin_request());
    return await axios
      .post("https://todoapp-1fsu.onrender.com/users/login", payload)
      .then((res) => {
        dispatch(signin_success(res.data));
        console.log(res);
      })
      .catch((err) => {
        dispatch(signin_failure());
        console.log(err);
      });
  };
  const handelSignup = async () => {
    const payload = { email, password, name };
    console.log(payload);
    dispatch(signup_request());
    return await axios
      .post("https://todoapp-1fsu.onrender.com/users/signup", payload)
      .then((res) => {
        dispatch(signup_success());
        console.log(res);
        setIsError(false);
        setIsSuccess(true)
        setTimeout(()=>{
          setSignin(true);
          setSignup(false);
        },2000)
       
      })
      .catch((err) => {
        dispatch(signup_failure());
        console.log(err);
        setIsError(true);
        setIsSuccess(false)
      });
  };
  console.log(isError);
  return (
    <>
      <p onClick={onOpen}>
        <BiUser size={"1.5em"} />
      </p>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Come on in</ModalHeader>
          <ModalCloseButton onClick={() => setIsError(false)} />

          <ModalBody pb={6} marginBottom="-30px">
            <div style={{ display: "flex", gap: "30px" }}>
              <button
                onClick={() => {
                  setSignin(true);
                  setSignup(false);
                  setEmail("");
                  setPassword("");
                }}
                style={{ borderBottom: signin ? "2px solid black" : "none" }}
              >
                SIGN IN{" "}
              </button>
              <button
                onClick={() => {
                  setSignin(false);
                  setSignup(true);
                  setEmail("");
                  setPassword("");
                }}
                style={{ borderBottom: signup ? "2px solid black" : "none" }}
              >
                I'M NEW HERE{" "}
              </button>
            </div>
          </ModalBody>

          {signin && (
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Email"
                  borderColor={"black.500"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    borderColor={"black.500"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <h1 style={{ marginTop: "10px" }}>
                <input
                  style={{ marginRight: "10px" }}
                  type="checkBox"
                  width={"5px"}
                />
                Keep me signed in.
              </h1>
            </ModalBody>
          )}
          {signin && (
            <ModalFooter>
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "#222f2f" }}
                mr={3}
                width="100%"
                onClick={handelSignin}
                isLoading={isLoading}
              >
                Sign in
              </Button>
            </ModalFooter>
          )}

          {signup && (
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Name</FormLabel>
                <Input
                  borderColor={"black.500"}
                  ref={initialRef}
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  borderColor={"black.500"}
                  ref={initialRef}
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    borderColor={"black.500"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <h1 style={{ marginTop: "10px", fontSize: "14px" }}>
                By registering, you agree with our <u>Terms & Conditions </u>{" "}
                and <u>Privacy and Cookie Policy</u>.
              </h1>
              <h1
                style={{ marginTop: "10px", fontSize: "14px", display: "flex" }}
              >
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="checkBox"
                    width={"5px"}
                  />
                </div>
                <div>
                  Sign up for promotions, tailored new arrivals, stock updates
                  and more. Unsubscribe at the bottom of our emails.{" "}
                  <u>Find out more</u>
                </div>
              </h1>
              {isError && (
                <h1 style={{ color: "red", marginTop: "10px" }}>
                  Email already register or something went wrong
                </h1>
              )}
              {isSuccess && (
                <h1 style={{ color: "green", marginTop: "10px" }}>
                  Sign up successfull please go to sign in
                </h1>
              )}
            </ModalBody>
          )}
          {signup && (
            <ModalFooter>
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "#222f2f" }}
                mr={3}
                width="100%"
                onClick={handelSignup}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export { Signup };
