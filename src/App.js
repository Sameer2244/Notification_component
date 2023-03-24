import React from 'react';
import './style.css';
import Test from './Component/Test.js';

export default function App() {
  const [Testarr, setTestarr] = React.useState([1, 2, 3, 4, 5]);
  const removeComponent = React.useCallback((data) => {
    setTestarr((e) => e.filter((item) => item !== data));
  }, []);
  return (
    <div>
      {Testarr.map((e, i) => {
        return (
          <div key={e}>
            {console.log(Testarr)}
            <Test index={i} removeComponent={removeComponent}>
              {e}
            </Test>
          </div>
        );
      })}
    </div>
  );
}
