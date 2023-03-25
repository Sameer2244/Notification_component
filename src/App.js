import React from 'react';
import './style.css';
import Test from './Component/Test.js';

export default function App() {
  const [Testarr, setTestarr] = React.useState([]);
  const counter = React.useRef(0);
  const removeComponent = React.useCallback((data) => {
    setTestarr((e) => e.filter((item) => item !== data));
  }, []);
  const addElement = (nottype) => {
    counter.current = counter.current + 1;
    setTestarr((e) => [...e, `${nottype}-${counter.current}`]);
  };
  return (
    <div>
      <div className="notification-buttons">
        <div
          onClick={() => {
            addElement('info');
          }}
          className="button info"
        >
          Info
        </div>
        <div
          onClick={() => {
            addElement('success');
          }}
          className="button success"
        >
          Success
        </div>
        <div
          onClick={() => {
            addElement('warning');
          }}
          className="button warning"
        >
          Warning
        </div>
        <div
          onClick={() => {
            addElement('error');
          }}
          className="button error"
        >
          Error
        </div>
      </div>
      <div className="notifications-container">
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
    </div>
  );
}
