import React from 'react';

const Button = ({ className, action, children, type }) => (
  <button className={`button ${className}`} type={type} onSubmit={action}>
    {children}
  </button>
);

export default Button;
