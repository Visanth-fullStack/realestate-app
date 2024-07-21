import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Container,
  Title,
  Form,
  Input,
  CheckboxContainer,
  Checkbox,
  Label,
  Button,
  ErrorMessage,
  Linkspan,
} from "./SignUpSignIn.styled";
import { useAuth } from '../../contexts/AuthContext';
import { Link, useLocation } from "react-router-dom";

const SignUpSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation().pathname;
  const {signInUser} = useAuth()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),   
    password: Yup.string()
    //   .required("Password is required")
    //   .matches(/[0-9]/, "Password must contain a number")
    //   .matches(/[a-z]/, "Password must contain a lowercase letter")
    //   .matches(/[A-Z]/, "Password must contain an uppercase letter")
    //   .min(8, "Password must be at least 8 characters")
    //   .max(20, "Password must be at most 20 characters")
    //   .notOneOf([Yup.ref("email")], "Password must not contain your email"),
  });

  const validate = async () => {
    const errors = {};
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false }
      );
    } catch (validationErrors) {
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
    }
    return errors;
  };

  let title = '';
  let isAdmin = false;
  let isCustomer = false;
  let login = false;
  let signup = false;
  const word = location.split('/');
  if (word.length === 3 && word[1]==='auth') {
    isAdmin = true;
    if (word[2] === 'signup') {
        title = "Admin SignUp"
        signup = true;
    } else if (word[2] === 'login') {
        title = "Admin Login";
        login = true;
    }
  } else {
    isCustomer = true;
    if (word[1] === 'signup') {
        title = "Register You Account"
        signup = true;
    } else if (word[1] === 'login') {
        title = "Login to your Account"
        login = true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data", { email, password});
      signInUser(email,password,location)
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <Button type="submit">Continue</Button>

        {isCustomer && login && 
        <Link to = '/signup'>
        <Linkspan>Don't have an account? Sign Up.</Linkspan>
        </Link>}
        {isCustomer && signup && 
        <Link to = '/login'>
        <Linkspan>Already Have an account? Log in.</Linkspan>
        </Link>}
        {isAdmin && login && 
        <Link to = '/auth/signup'>
        <Linkspan>Don't have an account? Sign Up.</Linkspan>
        </Link>}
        {isAdmin && signup && 
        <Link to = '/auth/login'>
        <Linkspan>Already Have an account? Log in.</Linkspan>
        </Link>}
      </Form>
    </Container>
  );
};

export default SignUpSignIn;
