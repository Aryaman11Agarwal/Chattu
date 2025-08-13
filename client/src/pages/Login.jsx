import React, { useState } from 'react'
import {Container, Paper, TextField, Typography} from "@mui/material"

const Login = () => {

  const [isLogin,setIsLogin]=useState(true)
  return (
    <Container component="main" maxWidth="sx">
     <Paper elevation={3} sx={{padding:4, display:"flex",flexDirection:"column",alignItems:"center"}}>
      {

        isLogin?(
          <>
          <Typography variant='h5'>Login</Typography>
          <form>
           <TextField></TextField>
          </form>
          </>
          ):<div>Register</div>
      }
     </Paper>
    </Container>
  )
}

export default Login
