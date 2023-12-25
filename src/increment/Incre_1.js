import React, { useState } from 'react';
// import "./Incre.css"
const Counter = () => {

  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(prevState => prevState - 1);
    }
  };
  const increment = () => {
    setCount(prevState => prevState + 1);
  };
  return (
    // <div className='ha'>
      <div className="section">
          <h2 className='km'>React Counter</h2>

          <div className="counter">
            <button
              className="counter_btn"
             
              onClick={decrement}
            >
             -
            </button>

            <h1 className="counter_count">{count}</h1>

            <button
              className="counter_btn"
              onClick={increment}
            >
              +
            </button>
          </div>
          <button
    
            className="reset_btn"
            
            onClick={() => setCount(0)}
          >
            Reset
          </button>
      </div>
    // </div>
  );
};

export default Counter;