import React from 'react';
import { Link } from 'react-router-dom'

const Ancor = ({ href, target, children, className }) => (
  <Link to={href} target={target || ""} className={`ancor ${className}`}>
    {children}
  </Link>
);

export default Ancor;
