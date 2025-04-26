import { useEffect, useReducer, useState } from 'react';
import { TaskContext } from './TaskContext';
import initialState from './initialTaskState';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(state, action);

      switch (action.type) {
        case 'INCREMENT': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaining: state.secondsRemaining + action.payload,
          };
        }
        case 'DECREMENT': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaining: state.secondsRemaining - action.payload,
          };
        }
        case 'CLEAN': {
          return {
            secondsRemaining: 0,
          };
        }
      }

      return state;
    },
    {
      secondsRemaining: 0,
    },
  );

  // useEffect(() => {
  //   console.log('State changed:', state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>The state is: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Increment +10
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>
        Increment +20
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Decrement -10
      </button>
      <button onClick={() => dispatch({ type: 'CLEAN' })}>Clean</button>
    </TaskContext.Provider>
  );
}
