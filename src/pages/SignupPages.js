import React from 'react';
import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';

const SignupPages = () => {
  const handleLoginUser = (value) => console.log(value)

  return (
    <AuthenticationTemplade
      handleLoginUser={handleLoginUser}
    />
  );
};

export default SignupPages;
