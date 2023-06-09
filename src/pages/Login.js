import {
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { loginUser } from "../config/Firebase/firebaseMethod";
import { useNavigate } from "react-router-dom";
import MAButton from "../config/components/MAButton";
import MAInput from "../config/components/MAInput";

function Login() {

  //useNavigate
  const navigate = useNavigate();

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);


  //login user function
  const loginUsers = () => {
    setLoader(true)
    const obj = {
      email: email,
      password: password,
    };
    loginUser(obj)
      .then((res) => {
        console.log(res);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography className="mb-4" variant="h4">
        LOGIN
      </Typography>
      <MAInput className="mb-3" label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} width="25rem"/>
      <MAInput className="mb-3" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} width="25rem"/>

      <Box className="mt-5 mb-5"> 
      <MAButton loading={loader} label="login" size="large" onClick={loginUsers} />
      </Box>
      <Typography>Login Credentials.</Typography>
      <Typography>email: mabdullah2037@gmail.com</Typography>
      <Typography>password: 123456</Typography>
    </Box>
  );
}

export default Login;
