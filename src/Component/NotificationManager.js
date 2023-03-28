import React from 'react';


export const useNotification = () => {
  return {
    showNotification: React.useCallback(
      ({ id, message, setTestarr, counter, nottype }) => {
        counter.current = counter.current + 1;
        setTestarr((e) => [...e, `${nottype}-${counter.current}`]);
        console.log(id, message);
      },
      []
    ),
  };
};
