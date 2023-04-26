import {
  Container,
  Box,
  Typography,
  Button,
  checkboxClasses,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authCheck,
  authFailure,
  authLogout,
  authSuccess,
} from "../redux/authSlice";
import { checkAuthToken } from "../lib/checkAuthToken";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    // let authy = checkAuthToken();
    // authy ? dispatch(authSuccess()) : dispatch(authFailure());
    dispatch(authCheck());
  }, []);
  return (
    <Container maxWidth='lg'>
      <Box maxWidth='xs' m={3}>
        <Typography variant='h2'>Please Login</Typography>
      </Box>

      {auth.isAuth ? (
        <Button variant='contained' onClick={() => dispatch(authLogout())}>
          Logout
        </Button>
      ) : (
        <>
          <Button variant='contained' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Register
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
