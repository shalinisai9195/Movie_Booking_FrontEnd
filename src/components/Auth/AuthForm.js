import { Dialog, Typography, Box, FormLabel, TextField, Button, IconButton } from '@mui/material'
import React, { useState } from 'react';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Link } from 'react-router-dom';


const lableStyle = { mt:1,mb:1}

const AuthForm = ({ onSubmit, isAdmin}) => {
  const[inputs, setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const[isSignup,setIsSignup] = useState(false);
  

  const handleChange = (e)=>{

    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    onSubmit({inputs, signup: isAdmin ? false : isSignup});
    //console.log(inputs)
  }
  return (
    <Dialog open={true} >
      <Box sx={{ ml:"auto", padding:1 }}>
         <IconButton LinkComponent={Link} to="/">
          <CancelRoundedIcon/>
         </IconButton>
      </Box>
      <Typography variant='h4' textAlign={"center"}>
      {isSignup? "Signup":"Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
         <Box
         padding={6}
         display={"flex"}
         justifyContent={"center"}
         flexDirection={"column"}
         width={400}
         margin={"auto"}
         alignContent={"center"}
         >
          { !isAdmin && isSignup && (
          <>
          <FormLabel sx={lableStyle}>Name</FormLabel>
          <TextField margin='normal' variant='standard' type={'text'} name='name'
             value={inputs.name}
             onChange={handleChange}
          />
          
          </>
         )
          
         }
          
          <FormLabel sx={lableStyle}>Email</FormLabel>
          <TextField margin='normal' variant='standard' type={'email'} 
          name='email'
          value={inputs.email}
          onChange={handleChange}/>
          <FormLabel sx={lableStyle}>Password</FormLabel>
          <TextField margin='normal' variant='standard'
          type={'password'} 
          name='password'
          value={inputs.password}
             onChange={handleChange}/>
          <Button
          type='submit'
          sx={{ mt:1, borderRadius:10, bgcolor:"#2b2d42"}}
          variant='contained'
          fullWidth
          >
          {isSignup? "Signup":"Login"}
         </Button>
        { !isAdmin && (<Button
          sx={{ mt:1, borderRadius:10}}
          fullWidth
          onClick={()=> setIsSignup(!isSignup)}
         >
          Switch To {isSignup ? "Login" : "Signup"}
         </Button>
         
         )}
       
         </Box>
         
         
      </form>
      {/* <p style={{textAlign:'center',fontWeight:'bold'}}>Eaxmple </p> */}
      {
        isAdmin ? <>
        <span style={{textAlign:'center'}}>AdminEmail: deepti123@gmail.com</span>
      <span style={{textAlign:'center',marginRight:'25px',marginBottom:'10px'}}>Pwd: deepti123</span>
               </>: ""

      }
      
      
    </Dialog>
    
  )
}

export default AuthForm