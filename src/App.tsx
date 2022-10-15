import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import AppStyle from './styles';
import { ITasks } from './type/tasks';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selected, setSelected] = useState<ITasks>()

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
  }

  return (
    <AppStyle>
      <GlobalStyle />
      <Form setTasks={setTasks} />
      <List
      selectTask={selectTask} 
      tasks={tasks}
      />
      <Timer />
    </AppStyle>
  );
}

export default App;
