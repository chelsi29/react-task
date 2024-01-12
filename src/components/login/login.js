import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';


// const navigate = useNavigate();

export default function login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
   
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item sm={4} md={7}
          sx={{
            height: '100vh',
            width: '60px',
            backgroundImage: 'url(https://minimals.cc/assets/illustrations/illustration_dashboard.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} mt={5} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
              Sign In
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button onClick={()=>{
                localStorage.setItem('arr',JSON.stringify([1,2,3,4]))
                localStorage.setItem('obj',JSON.stringify({email:'abc@gmail.com',password: '1234'}))
              }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Signup" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    
  );
}