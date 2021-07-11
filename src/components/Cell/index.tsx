import { useState, useEffect } from 'react';
import './styles.sass';

type props = {
  elIndex: number
}
export const Cell = ({ elIndex }: props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`[Cell - useEffect] Refresh ${elIndex}`);
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(`[Cell - body] Refresh ${elIndex}`);
  return (
    <div className='cell'>
      <button onClick={handleClick}>Plus</button>
      <span>{count}</span>
    </div>
  );
};
