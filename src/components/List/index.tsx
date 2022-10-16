import { Lists } from './styles';
import ItemCard from './Item';
import { useContext } from 'react';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import StyleProvider from './StyleProvider';

function List() {
  const { tasks } = useContext(GlobalStateContext);
  
  return (
    <Lists>
      <h2>Tarefas do dia</h2>
      <ul>
       {tasks.map((task) => (
        <StyleProvider key={task.id} selected={task.selected}>
          <ItemCard 
          {...task}
          />
        </StyleProvider>
       ))}
      </ul>
    </Lists>
  )
}

export default List;
