import { createContext } from 'react';
import { ITasks } from '../type/tasks';

interface Context {
  tasks: ITasks[],
  setTasks: (setTasks: ITasks[]) => void,
  selected: ITasks | undefined,
  setSelected: () => void,
  selectTask: (selectedTask: ITasks) => void,
}

const initialValues = {
  tasks: [],
  setTasks: () => {},
  selected: undefined,
  setSelected: () => {},
  selectTask: () => {},
}

const GlobalStateContext = createContext<Context>(initialValues);

export default GlobalStateContext;