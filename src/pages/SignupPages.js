import React from 'react';

import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';
import apiService from '../services/api.services';

const SignupPages = (props) => {
  const handleCreateUser = async values => {
    try {
      const { result, token } = await apiService.signupUser(values);

      localStorage.setItem('token', token);
      localStorage.setItem('result', result);

      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthenticationTemplade
      handleLoginUser={handleCreateUser}
    />
  );
};

export default SignupPages;
