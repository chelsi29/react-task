import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { registerValidationSchema } from "../schema/registervalidation";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  errorText: {
    color: "red",
  },
});

const validationSchema = registerValidationSchema;
const defaultTheme = createTheme();
const handleSignUp = (values) => {
  console.log(values);
};

function SignUp() {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "blue" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSignUp}
            >
              {({ values, handleChange, handleBlur, touched, errors }) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        error={ Boolean(errors.firstName)}
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                        helperText=<span className={classes.errorText}>
                          { errors.firstName}
                        </span>
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        error={ Boolean(errors.lastName)}
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                        helperText=<span className={classes.errorText}>
                          { errors.lastName}
                        </span>
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        error={Boolean(errors.email)}
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        helperText=<span className={classes.errorText}>
                          {errors.email}
                        </span>
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        error={Boolean(errors.password)}
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        helperText={
                          <span className={classes.errorText}>
                            {errors.password}
                          </span>
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default SignUp;
