import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import AppStyle from './styles';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  const [tasks, setTasks] = useState([{
    task: "React",
    time: "03:00:00"
  },
  {
    task: "TypeScript",
    time: "03:00:00"
  }])

  return (
    <AppStyle>
      <GlobalStyle />
      <Form />
      <List tasks={tasks} />
      <Timer />
    </AppStyle>
  );
}

export default App;
