import React, { Fragment, useEffect, useState } from 'react'
import { deleteBooking, getUserBooking, getUserDetails } from '../api-helpers/api-helpers'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UserProfile = () => {

  const [bookings,setBookings] = useState();
  const[user,setUser] = useState();

  useEffect(()=>{
    getUserBooking()
    .then((res)=> setBookings(res.bookings))
    .catch((err)=> console.log(err))

    getUserDetails()
    .then((res) => setUser(res.user))
    .catch((err)=> console.log(err))

  },[])

  console.log("userbooking", bookings);

  const handleDelete =(id)=>{
     deleteBooking(id).then((res)=> console.log(res)).catch((err)=> console.log(err))
  }

  return (
    
    <Box width={"100%"} display={"flex"}>
    
    <Fragment>
      {" "}
      {user && (
      <Box flexDirection={"column"} justifyContent={"center"} padding={3} alignItems={"center"} width={"30%"} >
          <AccountCircleIcon sx={{ml:3,fontSize:"10rem", textAlign:"center"}} />
          <Typography width={"auto"} padding={1} textAlign={"center"}
           border={"1px solid #ccc"} borderRadius={6} >
            Name: {user.name}
          </Typography>
          <Typography mt={1} width={"auto"} padding={1} textAlign={"center"}
           border={"1px solid #ccc"} borderRadius={6} >
            Email: {user.email}
          </Typography>
      </Box>
      )}
      { bookings && (
     <Box width={"70%"} display={"flex"} flexDirection={"column"}>
      <Typography variant='h3' fontFamily={"verdana"} textAlign={"center"} padding={2}>Bookings</Typography>
      <Box margin={"auto"} display={"flex"} flexDirection={"column"} width={"80%"}>
         <List>
           {
            bookings.map((booking,index)=> (
            <ListItem
                  sx={{
                    bgcolor:"#00d386",
                    color:"white",
                    textAlign:"center",
                    margin:1
                  }}
                 key={index} >
               {/* <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Movie: {booking.movie.title}
               </ListItemText> */}
               <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Seat: {booking.seatNumber}
               </ListItemText>
               <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Date: {new Date(booking.date).toDateString()}
               </ListItemText>
               <IconButton onClick={()=>handleDelete(booking._id)} color='error'>
                <DeleteForeverIcon />
               </IconButton>
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

export default UserProfile