import { Lists } from './styles';
import Item from './Item';
import { ITasks } from '../../type/tasks';

function List({ tasks }: { tasks: ITasks[] }) {

  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task, index) => (
        <Item
        key={`${index}${task.task}`} 
        {...task}
        />
       ))}
      </ul>
    </Lists>
  )
}

export default List;
