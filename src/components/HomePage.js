import { Box, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import {getAllMovies} from '../api-helpers/api-helpers'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'

const HomePage = () => {
  
  const[movies,setMovies] = useState([]);

  useEffect(()=>{
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((err)=>{
      console.log(err)
    })

  },[])
console.log(movies);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
        <Box margin={'auto'} width="80%" height={"40vh"} padding={2}>
          <img src='https://m.media-amazon.com/images/M/MV5BNzNjZDMyZmQtMTU5NC00ZDM3LWFmY2QtOTE2OWU0NGMwMzhlXkEyXkFqcGdeQXVyODkxODIzODI@._V1_.jpg' alt='surarai potru' width={"100%"} height={"100%"}/>
          {/* //https://simkl.net/fanart/31/31381385e834fbd84_0.jpg  - anbe
          https://i.ytimg.com/vi/i5QURX26dCI/maxresdefault.jpg - dia
          https://d2zub9v50g8scn.cloudfront.net/yupptv/Movies/yupp/1080x400/Charlie.jpg - charl*/}
        </Box>
        <Box>
          <Typography variant='h4' textAlign={'center'}>
            Latest Releases
          </Typography>
        </Box>
        <Box display={"flex"} width={"80%"} margin={"auto"} justifyContent={"center"} flexWrap="wrap">
         {movies && movies.slice(0,4).map((movie,index)=> <MovieItem id={movie.id}
          title={movie.title} releaseDate={movie.releaseDate} 
          posterUrl={movie.posterUrl} key={index}
          />
            )}
        </Box>
        <Box display={"flex"} padding={5} margin="auto">
          <Button LinkComponent={Link} to='/movies' variant='outlined' sx={{margin:"auto", color:"#2b2d42"}}>
             View All Movies
          </Button>
        </Box>

    </Box>
  )
}

export default HomePage