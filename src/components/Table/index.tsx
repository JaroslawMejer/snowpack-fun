import './styles.sass';
import { useState, useEffect } from 'react';

type props = {
  children: React.ReactNode
}

export const Table = ({ children }: props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`[Table - useEffect]`);
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(`[Table - body]`);
  return (
    <>
      <button onClick={handleClick}>Plus</button>
      <span>{count}</span>
      <div className='table'>{children}</div>
    </>
  );
};
