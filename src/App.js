import React from 'react';
import './style.css';
import Test from './Component/Test.js';

export default function App() {
  const [Testarr, setTestarr] = React.useState([1, 2, 3, 4, 5]);
  return (
    <div>
      {Testarr.map((e) => {
        return (
          <div key={e}>
            <Test>{e}</Test>
          </div>
        );
      })}
    </div>
  );
}
