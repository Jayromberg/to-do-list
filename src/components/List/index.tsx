import { Lists } from './styles';
import ItemCard from './Item';
import { useContext } from 'react';
import GlobalStateContext from '../../contexts/GlobalStateContext';

function List() {
  const { tasks } = useContext(GlobalStateContext);
  
  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task) => (
        <ItemCard
        key={task.id} 
        {...task}
        />
       ))}
      </ul>
    </Lists>
  )
}

export default List;
