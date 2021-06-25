import React from 'react';
import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';

const LoginPages = () => {
  const handleLoginUser = (value) => console.log(value)

  return (
    <AuthenticationTemplade
      isLogin
      handleLoginUser={handleLoginUser}
    />
  );
};

export default LoginPages;
