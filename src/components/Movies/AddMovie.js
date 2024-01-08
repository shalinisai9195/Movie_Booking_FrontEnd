import { Box, TextField, Typography ,FormLabel, Button, Checkbox} from '@mui/material'
import React, { useState } from 'react'
import { addMovies } from '../../api-helpers/api-helpers'

const labelProps ={ mt:1, mb:1 }

const AddMovie = () => {

  const [inputs,setInputs] = useState({
    title:"",
    description:"",
    posterUrl:"",
    releaseDate:"",
    featured: false
  })

  const [actors,setActors] = useState([]);
  const [actor,setActor] = useState("");

  const handleChange = (e)=>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))

  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs,actors);
    addMovies({...inputs, actors})
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box width={"40%"} margin={"auto"} display={"flex"}  padding={6} mt={4} flexDirection={"column"}
         boxShadow={"10px 10px 20px #ccc"}>
          <Typography textAlign={"center"} fontFamily={"verdana"} variant='h5'> 
          Add New Movie 
          </Typography>
          <FormLabel sx={{labelProps}}>Title</FormLabel>
          <TextField value={inputs.title} onChange={handleChange} name='title' variant='standard' margin='normal'/>
          
          <FormLabel sx={{labelProps}}>Description</FormLabel>
          <TextField value={inputs.description} onChange={handleChange} name='description' variant='standard' margin='normal'/>

          <FormLabel sx={{labelProps}}>PosterUrl</FormLabel>
          <TextField value={inputs.posterUrl} onChange={handleChange} name='posterUrl' variant='standard' margin='normal'/>

          <FormLabel sx={{labelProps}}>Release Date</FormLabel>
          <TextField value={inputs.releaseDate} onChange={handleChange} type={'date'} name='releaseDate' variant='standard' margin='normal'/>

          <FormLabel sx={{labelProps}}>Actor</FormLabel>
          <Box display={"flex"}>

          <TextField value={actor} name='actor' onChange={(e)=> setActor(e.target.value)} variant='standard' margin='normal'/>
          <Button onClick={()=> {
            setActors([...actors, actor]);
            setActor("");
          }} >Add</Button>
          </Box>
          <FormLabel sx={{labelProps}}>Featured</FormLabel>
          <Checkbox name='featured' checked={inputs.featured} onClick={(e)=>
            setInputs((prevState)=> ({
                 ...prevState,
                 featured: e.target.checked
            }))} sx={{mr:"auto"}} />
          <Button type='submit' variant='contained' sx={{width: "30%" ,margin:"auto", bgcolor:"#2b2d42",
           ":hover":{
            bgcolor:"#121217"
          }}}>Add New Movie</Button>
       </Box>
      </form>
    </div>
  )
}

export default AddMovie