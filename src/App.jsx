import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import UsersGrid from "./layouts/UsersGrid";
import { getUsersByUsername } from "./services/getUsers";



const App = () => {

  const [ user, setUser ] = useState('');
  const [ page, setPage ] = useState(0)
  const [ users, setUsers ] = useState([]);

  useEffect(()=>{
    getUsersByUsername(user,page)
    .then(res => setUsers(res.items))
    .catch(e => console.log(e))
  },[user, page])

 
  return (
    <Container
      sx={{ 
        background: 'whitesmoke',
        width:'80vw',
        height:'500px',
        borderRadius: '20px',
        marginTop:'50px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
       
       }}
    >
      <Search user = { user } setUser = { setUser } />
      {
       ( !users || users.length === 0)
        ?
        <h1>No user found</h1>
        :
        <>
          <UsersGrid  users = { users } />
          <Button
            variant="outlined"
            onClick={ ()=>setPage( page + 1 ) }
          >
            Load More
          </Button>
        
        </>
      }

    </Container>
  );
};

export default App;