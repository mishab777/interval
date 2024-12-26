import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";

const Login = () => {

    const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === "admin" && credentials.password === "password") {
      navigate("/dashboard"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
      >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundImage:'linear-gradient(to right, #fff,#23AABF)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        component="form"
        onBlur={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
          gap: "15px",
          width: 350,
          backgroundImage:'linear-gradient(to right, #fff,#2A4858)',
        }}
        autoComplete="off"
      >
        <Typography variant="h5" color="white">
             Login 
        </Typography>
        <TextField
        value={credentials.username}
        onChange={handleChange}
          id="standard-basic"
          label="Username"
          name="username"
          variant="standard"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "2px solid white",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "2px solid white",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "2px solid white",
            },
          }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          value={credentials.password}
        onChange={handleChange}
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "2px solid white",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "2px solid white",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "2px solid white",
            },
          }}
        />
          {error && (
        <Typography variant="body2" color="red">
          {error}
        </Typography>
      )}
        <Button
        type="submit"
          variant="contained"
          sx={{
            width: "100%",
            color: "#00A9F2",
            backgroundColor:'#fff',
            boxShadow:'none',
            '&:hover': {
                backgroundColor: '#23AABF',
                color: 'white',
              },
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
     </motion.div>
     </AnimatePresence>
  );
};

export default Login;
