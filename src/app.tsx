import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './app.sass';
import { printid, printName, welcomeMessage } from './helpers';

export const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  printName({first: "Jaroslaw", last: "Mejer"})
  printid(23)
  printid("23")
  return (
    <div className='App'>
      <img src={logo} />
      <p>{welcomeMessage("Jaroslaw", new Date())}</p>
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
    </div>
  );
};
