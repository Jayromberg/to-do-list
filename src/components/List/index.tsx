import react from 'react';
import { Lists, Item } from './styles';

function List() {
  const tarefas = [{
    tarefa: "React",
    tempo: "03:00:00"
  },
  {
    tarefa: "TypeScript",
    tempo: "03:00:00"
  }]

  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tarefas.map((e, index) => (
        <Item key={`${index}${e.tarefa}`}>
          <h3>{e.tarefa}</h3>
          <span>{e.tempo}</span>
        </Item>
       ))}
      </ul>
    </Lists>
  )
}

export default List;
