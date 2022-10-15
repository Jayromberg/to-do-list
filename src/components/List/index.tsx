import { Lists } from './styles';
import Item from './Item';
import { useState } from 'react';

function List() {
  const [tasks, setTasks] = useState([{
    tarefa: "React",
    tempo: "03:00:00"
  },
  {
    tarefa: "TypeScript",
    tempo: "03:00:00"
  }])

  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task, index) => (
        <Item
        key={`${index}${task.tarefa}`} 
        {...task}
        />
       ))}
      </ul>
    </Lists>
  )
}

export default List;
