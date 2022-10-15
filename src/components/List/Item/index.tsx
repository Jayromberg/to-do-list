import { ITasks } from "../../../type/tasks";
import { Item } from "../styles"

export default function item(props: ITasks) {
  const { task, time } = props;

  return (
    <Item>
      <h3>{task}</h3>
      <span>{time}</span>
    </Item>
  )
}
