import React from 'react';

import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';
import apiService from '../services/api.services';

const LoginPage = (props) => {
  const handleLoginUser = async values => {
    const { email, password } = values;
    try {
      const { result, message } = await apiService.loginUser({ email, password });

      localStorage.setItem('token', message);
      localStorage.setItem('result', result);

      props.history.push('/');
    } catch (error) {
      if (error.response.data.message === 'Invalid credentials') {
        console.log(error.response.data.message)
      }
    }
  }
  return (
    <AuthenticationTemplade
      isLogin
      handleLoginUser={handleLoginUser}
    />
  );
};

export default LoginPage;
