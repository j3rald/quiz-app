import React from 'react';
import PropTypes from 'prop-types';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../components/CustomForm';
import { Link } from 'react-router-dom';

function Login({ login }) {
  return (
    <>
      <CustomForm
        initialValues={loginInitialValues}
        onSubmit={login}
        fields={loginFields}
        btnText="Sign in"
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <Link
          to="register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
