import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { loginValidationSchema } from "../schema/loginvalidation";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  errorText: {
    color: "red",
  },
});

const Login = () => {
  var navigate = useNavigate();

  const handleLogin = (values) => {
    const { email, password } = values;
    const setLocalStorage = async () => {
      await Promise.all([
        localStorage.setItem("email", "abc@gmail.com"),
        localStorage.setItem("password", "1234"),
      ]);
    };

    setLocalStorage().then(() => {
      var Email = localStorage.getItem("email") || "abc@gmail.com";
      var userPassword = localStorage.getItem("password") || "1234";
      if (Email === email && userPassword === password) {
        navigate("/sideNav");
      } else {
        navigate("/");
        console.log("Incorrect credentials");
      }
    });
  };

  const classes = useStyles();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => handleLogin(values)}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
      }) => (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            sm={4}
            md={7}
            sx={{
              height: "100vh",
              width: "60px",
              backgroundImage:
                "url(https://minimals.cc/assets/illustrations/illustration_dashboard.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} mt={5} elevation={0} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "blue" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Sign In</Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={Boolean(errors.email)}
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  helperText=<span className={classes.errorText}>
                    {errors.email}
                  </span>
                />

                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={Boolean(errors.password)}
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  helperText={
                    <span className={classes.errorText}>{errors.password}</span>
                  }
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link href="/Signup">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default Login;




// import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { loginValidationSchema } from "../schema/validation";
// import { useFormik} from "formik";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log('email',email)
//   console.log('password',password)
//   var navigate = useNavigate();
//   const Email = localStorage.getItem("email") || "abc@gmail.com";
//   const userPassword = localStorage.getItem("password") || "1234";

//   const handleLogin = (event, email, password) => {
//     // console.log("email", Email);
//     // console.log("pwd", userPassword);

//     event.preventDefault();

//         var storedEmail = localStorage.getItem("email");
//         var storedPassword = localStorage.getItem("password");

//     if (Email === email && userPassword === password) {
//       navigate("/sideNav");
//     } else {
//       navigate("/");
//       console.log("Incorrect credentials");
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("email", "abc@gmail.com");
//     localStorage.setItem("password", "1234");
//   }, []);

//   return (

//     <Formik
//     initialValues={initialValues}
//     validationSchema={validationSchema}
//     onSubmit={onSubmit}
//   >
// const formik = useFormik({
//   loginValue: !formIsEdit ? loginValue : props?.listingPriceRangeEditData,
//   validationSchema: loginValidationSchema,
//   onSubmit: handleSubmit
// });

//     <Grid container component="main" sx={{ height: "100vh" }}>
//       <CssBaseline />
//       <Grid
//         item
//         sm={4}
//         md={7}
//         sx={{
//           height: "100vh",
//           width: "60px",
//           backgroundImage:
//             "url(https://minimals.cc/assets/illustrations/illustration_dashboard.png)",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       />

//       <Grid item xs={12} sm={8} md={5} mt={5} elevation={0} square>
//         <Box
//           sx={{
//             my: 8,
//             mx: 4,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "blue" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography variant="h5">Sign In</Typography>

//           <Box component="form" onChange={formik.handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               onBlur={formik.handleBlur}
//               value={formik.value.email}
//               onChange={(e) => setEmail(e.target.value)}
//               helperText={formik.touched.email && formik.errors.email}

//             />
//               {formik.touched.price && formik.errors.price ? (
//               <Box className={`text-ValidationMsgFont font-ValidationMsgFW text-ValidationMsgColor`}>{formik.errors.price}</Box>
//                     ) : (
//                         " Email is required "
//                     )}

//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onBlur={formik.handleBlur}
//               value={formik.value.password}
//               onChange={(e) => setPassword(e.target.value)}
//               helperText={formik.touched.password && formik.errors.password}

//             />
//               {formik.touched.price && formik.errors.price ? (
//               <Box className={`text-ValidationMsgFont font-ValidationMsgFW text-ValidationMsgColor`}>{formik.errors.price}</Box>
//                     ) : (
//                         " Password is required "
//                     )}
//             <Button
//               onClick={(event) => handleLogin(event,email,password)}
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Login
//             </Button>

//             <Grid container>
//               <Grid item xs>
//                 <Link href="#">Forgot password?</Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/Signup">{"Don't have an account? Sign Up"}</Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//     </Formik>
//   );
// };

// export default Login;
