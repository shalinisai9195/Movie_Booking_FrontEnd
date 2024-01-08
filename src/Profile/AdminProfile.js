import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from 'react';
import { getAdminById } from '../api-helpers/api-helpers'
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const AdminProfile = () => {

  
  const[admin,setAdmin] = useState();

  useEffect(()=>{
  
    getAdminById()
    .then((res) => setAdmin(res.admin))
    .catch((err)=> console.log(err))

  },[])

  console.log(admin)

  return (
    <Box width={"100%"} display={"flex"}>
    
    <Fragment>
      {" "}
      {admin && (
      <Box width={"30%"} flexDirection={"column"} justifyContent={"center"} padding={3} alignItems={"center"} >
          <AccountCircleIcon sx={{fontSize:"10rem", textAlign:"center", ml:3}} />
          
          <Typography mt={1} width={"auto"} padding={1} textAlign={"center"}
           border={"1px solid #ccc"} borderRadius={6} >
            Email: {admin.email}
          </Typography>
      </Box>
      )}
      { admin && admin.addedmovies.length > 0 && (
     <Box width={"70%"} display="flex" flexDirection={"column"}>
      <Typography variant='h3' fontFamily={"verdana"} textAlign={"center"} padding={2}>
        Added Movies
      </Typography>
      <Box margin={"auto"} display="flex" flexDirection={"column"} width={"80%"}>
         <List>
           {
            admin.addedmovies.map((movie,index)=> (
             <ListItem
                  sx={{
                    bgcolor:"#00d386",
                    color:"white",
                    textAlign:"center",
                    margin:1
                  }}
                  >
               <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Movie: {movie.title}
               </ListItemText>
              </ListItem>
            ))
           }
         </List>
      </Box>
      </Box>
      )}
      </Fragment>
    
    </Box>
  )
}

export default AdminProfile