import React from 'react'

const Input = ({ onChange, className, placeholder, type, value, error, onBlur, name, id }) => (
  <>
    <input
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
    />
    {error && <span className="input--error">{error}</span>}
  </>
);

export default Input;
