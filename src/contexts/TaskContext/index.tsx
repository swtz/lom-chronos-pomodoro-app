import { useEffect, useReducer, useState } from 'react';
import { TaskContext } from './TaskContext';
import initialState from './initialTaskState';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  const [number, dispatch] = useReducer((state, action) => {
    console.log(state, action);

    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'CLEAN':
        return 0;
    }

    return state;
  }, 0);

  // useEffect(() => {
  //   console.log('State changed:', state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>The number is: {number}</h1>
      <button onClick={() => dispatch('INCREMENT')}>Increment</button>
      <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
      <button onClick={() => dispatch('CLEAN')}>Clean</button>
    </TaskContext.Provider>
  );
}
