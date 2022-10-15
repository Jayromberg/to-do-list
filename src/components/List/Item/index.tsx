import { ITasks } from "../../../type/tasks";
import { Item } from "../styles"

interface IProps extends ITasks {
  selectTask: (selectedTask: ITasks) => void,
}

export default function item(props: IProps) {
  const { task, time, selected, completed, id,selectTask } = props;
  console.log(selected);
  
  return (
    <Item
      className="itemSelecionado"
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
