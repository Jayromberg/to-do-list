import { createContext } from 'react';
import { ITasks } from '../type/tasks';

interface Context {
  tasks: ITasks[],
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>,
  selected: ITasks | undefined,
  setSelected: React.Dispatch<React.SetStateAction<ITasks | undefined>>,
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