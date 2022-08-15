import { useNavigate } from 'react-router-dom'

import {  Grid, Typography, Avatar } from "@mui/material";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const UsersGrid = ({ users }) => {

  let navigate = useNavigate();

 const onSearch = (login)=>{
    navigate(`user/${login}`);
 }
  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }} className="animate__animated animate__fadeIn">
      {users?.map((user) => {
        return (
          <Grid item xs={4}>
            
            <Card sx={{ maxWidth: 345, cursor:'pointer' }}
              onClick = { ()=>onSearch(user.login) }
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src={user.avatar_url}></Avatar>
                }
                title={user.login}
               
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  User Type: {user.type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default UsersGrid;
