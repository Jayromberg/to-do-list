import { useContext } from 'react';
import GlobalStateContext from "../../../contexts/GlobalStateContext";
import { ITasks } from "../../../type/tasks";
import { Icon, Item } from "./styles"
import checkMark from "../../../assets/img/checkMark.svg"

export default function ItemCard(props: ITasks) {
  const { task, time, selected, completed, id } = props;
  const { selectTask } = useContext(GlobalStateContext);

  return (
    <Item
      completed={completed}
      onClick={() => !completed && selectTask(
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
      {completed && <Icon src={ checkMark } alt="Tarefa Completada" />}
    </Item>
  )
}
