import React, { useMemo, useState } from 'react';
import { ITasks } from '../type/tasks';
import GlobalStateContext from './GlobalStateContext';

interface ContextProvider {
  children: React.ReactNode,
}

function GlobalStateProvider({ children }: ContextProvider) {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selected, setSelected] = useState<ITasks>()

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks((previous) => previous.map((task) => ({
      ...task,
      selected: task.id === selectedTask.id
    })))
  }

  const globalState = useMemo(() => ({
    tasks,
    setTasks,
    selected,
    setSelected,
    selectTask
  }), [selected, tasks]);

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;