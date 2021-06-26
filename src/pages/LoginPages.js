import React from 'react';
import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';

const LoginPages = () => {
  const handleLoginUser = (values) => console.log(values)

  return (
    <AuthenticationTemplade
      isLogin
      handleLoginUser={handleLoginUser}
    />
  );
};

export default LoginPages;
