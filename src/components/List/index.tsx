import { Lists } from './styles';
import Item from './Item';
import { ITasks } from '../../type/tasks';

interface IProps {
  tasks: ITasks[],
  selectTask: (selectedTask: ITasks) => void,
}

function List({ tasks, selectTask }: IProps) {
  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task, index) => (
        <Item
        key={task.id} 
        {...task}
        selectTask={selectTask}
        />
       ))}
      </ul>
    </Lists>
  )
}

export default List;
