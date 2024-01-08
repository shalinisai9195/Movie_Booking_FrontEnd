import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMoviesDetails, newBooking } from '../../api-helpers/api-helpers';
import { Typography ,Box, FormLabel, TextField, Button} from '@mui/material';

const Booking = () => {

  const[movie, setMovies] = useState();
  const[inputs,setInput] = useState({
    seatNumber:"",
    date:""
  })

  const id = useParams().id;
  console.log(id);
  
useEffect(()=>{
  getMoviesDetails(id)
  .then((res)=> setMovies(res.movie))
  .catch((err)=> console.log(err))
},[id])
 console.log(movie);

 const handlechange = (e)=>{
    setInput((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
 }

 const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs)
    newBooking({...inputs, movie: movie._id})
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
 }

  return (
    <div>
      {
        movie && <Fragment>
          <Typography padding={3} fontFamily="fantasy" variant='h4' textAlign={"center"} >
            Book Tickets of Movies: {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
             <Box display={"flex"} justifyContent={"center"} 
             flexDirection={"column"} paddingTop={3} width={"50%"} marginRight={"auto"}>
              <img height={"300px"} width={"80%"} src={movie.posterUrl} alt={movie.title}/>
              <Box width={"80%"} marginTop={3} padding={2}>
               <Typography paddingTop={3}>{movie.description}</Typography>
               <Typography fontWeight={"bold"} marginTop={1}>
                Starrer:
                {
                  movie.actors.map((actor)=> " " + actor + " ")
               }
               
               </Typography>
               <Typography fontWeight={"bold"} marginTop={1} >
               ReleaseDate: { new Date(movie.releaseDate).toDateString()}
               </Typography>
             </Box>
             </Box>
             <Box width={"50%"} paddingTop={3}>
                 <form onSubmit={handleSubmit}>
                  <Box display={"flex"} flexDirection={"column"} padding={5} margin={"auto"}>
                     <FormLabel>Seat Number</FormLabel>
                     <TextField value={inputs.seatNumber} onChange={handlechange} type='number' margin='normal' name='seatNumber' variant='standard'></TextField>
                     <FormLabel>Bokking Date</FormLabel>
                     <TextField value={inputs.date} onChange={handlechange} type='date' margin='normal' name='date' variant='standard'></TextField>
                     <Button type='submit' sx={{mt:3}} >Book Now</Button>
                  </Box>
                 </form>
             </Box>
             
          </Box>
        </Fragment>
      }
    </div>
  )
}

export default Booking