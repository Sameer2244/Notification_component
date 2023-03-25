import React from 'react';
import './style.css';
import Test from './Component/Test.js';

export default function App() {
  const [Testarr, setTestarr] = React.useState([]);
  const counter = React.useRef(0);
  const removeComponent = React.useCallback((data) => {
    setTestarr((e) => e.filter((item) => item !== data));
  }, []);
  const addElement = () => {
    counter.current = counter.current + 1;
    setTestarr((e) => [...e, `notification ${counter.current}`]);
  };
  return (
    <div>
      <div className="notification-buttons">
        <div className="button info">Info</div>
        <div className="button success">Success</div>
        <div className="button warning">Warning</div>
        <div className="button error">Error</div>
      </div>
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
