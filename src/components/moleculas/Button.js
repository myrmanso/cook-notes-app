import React from 'react';

const Button = ({ className, action, children, type, onSubmit }) => (
  <button className={`button ${className}`} type={type} onClick={action} onSubmit={onSubmit}>
    {children}
  </button>
);

export default Button;
