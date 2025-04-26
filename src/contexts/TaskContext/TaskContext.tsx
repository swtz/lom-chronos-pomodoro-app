import { createContext } from 'react';
import initialState from './initialTaskState';
import { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionsModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionsModel>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialState,
  dispatch: () => {},
});
