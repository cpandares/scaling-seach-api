import { useParams, NavLink } from "react-router-dom";
import {
  Box,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getUserByUsername } from "../services/getUser";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const UserPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUserByUsername(login)
      .then((res) => setUser(res))
      .catch((e) => console.log(e));
  }, [login]);

  const dateString = useMemo(() => {
    const newDate = new Date(user.created_at);
    return newDate.toUTCString();
  }, [user.created_at]);

  
  return (
    <Grid
      container
      sx={{
        background: "whitesmoke",
        width: "100%",
        height: "500px",
        borderRadius: "20px",
        marginTop: "50px",
        padding: "20px",
      }}
      className="animate__animated animate__fadeIn"
    >
      <Grid item xs={4}>
          <NavLink
            to="/"
            >
              Go back
          </NavLink>
        <CardMedia 
        component="img" 
        alt={user.login} 
        image={user.avatar_url} 
        sx={{ marginTop:'5px' }}/>
      </Grid>

      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography variant="h4">
            Name:
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {" " + user.login}
            </a>
          </Typography>

          <Typography>User Joined: {dateString}</Typography>
        </Stack>

        <Stack>
          <Paper
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",

              gap: 2,
              marginTop: "20px",
            }}
          >
            <Typography elevation={6}>{user.bio}</Typography>
            <Typography>Followers: {user.followers}</Typography>
            <Typography>Followings: {user.following}</Typography>
            {
              user.location &&
              <Typography>
                <LocationOnIcon />
                Location: {user.location}
              </Typography>
            }

            {user.email && (
              <Typography>
                Email:
                {user.email}
              </Typography>
            )}
            {user.twitter_username && (
              <Typography>
                Twitter Username:
                {user.twitter_username}
              </Typography>
            )}
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserPage;
