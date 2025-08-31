import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="Password"
                variant="outlined"
              ></TextField>

              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign="center" m={"1rem"}>
                OR
              </Typography>

              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                SIGN UP INSTEAD
              </Button>
            </form>
          </>
        ) : (
          <>
             <Typography variant="h5">Register</Typography>
            <form>

               <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              ></TextField>

               <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                multiline
                maxRows={4}

                
              ></TextField>


              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="Password"
                variant="outlined"
              ></TextField>

              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                REGISTER
              </Button>
              <Typography textAlign="center" m={"1rem"}>
                OR
              </Typography>

              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                SIGN IN INSTEAD
              </Button>
            </form>

          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
