import React from 'react';
import AuthenticationTemplade from '../components/templades/AuthenticationTemplade';

const SignupPages = () => {
  const handleLoginUser = (values) => console.log(values)

  return (
    <AuthenticationTemplade
      handleLoginUser={handleLoginUser}
    />
  );
};

export default SignupPages;
