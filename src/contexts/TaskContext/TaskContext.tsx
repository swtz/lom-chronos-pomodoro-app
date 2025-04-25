import initialState from './initialTaskState';
import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialState,
  setState: () => {},
});
