import { Lists } from './styles';
import Item from './Item';

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
        <Item
        key={`${index}${e.tarefa}`} 
        {...e}
        />
       ))}
      </ul>
    </Lists>
  )
}

export default List;
