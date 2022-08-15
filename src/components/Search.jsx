
import {  Stack, TextField } from '@mui/material'
import { useState } from 'react';

const Search = ({ setUser }) => {  

 

    const [ value, setValue ] = useState('')

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleSearch = (e)=>{
        if(e.key === 'Enter'){
            setUser( value )            
        }
    }

    return (

        <Stack
            direction='row'
            sx={{
                marginTop:'30px',
                width:'80%'
            }}
        >
            <TextField
                autoFocus
                onKeyPress={ (e)=>handleSearch(e)  }
                id="outlined-basic" 
                label="Find Github User" 
                variant="outlined"
                size= 'small'
                name = { value }
                onChange = { handleChange }
                placeholder='Type your user and press enter'
                sx={{
                    width:'90%',
                }}
            >
              
            </TextField>
        </Stack>

    );
};

export default Search;