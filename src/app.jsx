import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './app.sass';

export const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <div className='App'>
      <img src={logo} />
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
    </div>
  );
};
