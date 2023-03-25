import React from 'react';
import '../style.css';
export default function Test({ children, index, removeComponent }) {
  const animation = React.useRef(0);
  const [width, setWidth] = React.useState(100);

  const animateWidth = () => {
    animation.current = setInterval(() => {
      // console.log(width);
      setWidth((e) => {
        if (e > 0) {
          return e - 1;
        }
        pauseInterval();
        removeComponent(children);
        return 0;
      });
    }, 100);
  };

  const pauseInterval = () => {
    clearInterval(animation.current);
  };
  React.useEffect(() => {
    animateWidth();
  }, []);
  return (
    <div
      className="notification"
      onMouseEnter={pauseInterval}
      onMouseLeave={animateWidth}
    >
      {children}
      <div className="animator" style={{ width: `${width}%` }}></div>
    </div>
  );
}
