import { Aside } from './styles';
import ItemCard from './Item';
import { useContext } from 'react';
import GlobalStateContext from '../../contexts/GlobalStateContext';

function List() {
  const { tasks } = useContext(GlobalStateContext);
  
  return (
    <Aside>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task) => (
        <ItemCard
          key={task.id}
          {...task}
        />
       ))}
      </ul>
    </Aside>
  )
}

export default List;
