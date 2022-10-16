import { useContext } from 'react';
import GlobalStateContext from "../../../contexts/GlobalStateContext";
import { ITasks } from "../../../type/tasks";
import { Item } from "../styles"

export default function ItemCard(props: ITasks) {
  const { task, time, selected, completed, id } = props;
  const { selectTask } = useContext(GlobalStateContext);
  
  return (
    <Item
      onClick={() => selectTask(
        {
          task,
          time,
          selected,
          completed,
          id,
        }
      )}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </Item>
  )
}
