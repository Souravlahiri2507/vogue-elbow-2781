import {
  FormControl,
  FormLabel,
  Button,
  Center,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
  const nameRef = useRef(null);
  const phnRef = useRef(null);
  const mailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phnRef.current.value;
    const mail = mailRef.current.value;
    const pass = passRef.current.value;
    const details = {
      name,
      phone,
      mail,
      pass,
    };

    // console.log(name,phone,mail,pass)
    localStorage.setItem("details", JSON.stringify(details));
    alert("User Signed-up Successfully");
    window.location.href = "http://localhost:3000/";
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Center>
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid black",
            padding: "30px 60px 30px 60px",
            borderRadius: "10px",
          }}
        >
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Name"
              ref={nameRef}
              w="xl"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter Your Phone Number"
              ref={phnRef}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Your Email" ref={mailRef} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Password"
              ref={passRef}
            />
          </FormControl>
          <br />
          <Button type="submit" _hover={{ background: "teal", color: "white" }}>
            Submit
          </Button>
        </form>
      </Center>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Login;
