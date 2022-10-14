import { Item } from "../styles"

interface IProps {
  tarefa: string;
  tempo: string;
}

export default function item(props: IProps) {
  const { tarefa, tempo } = props;

  return (
    <Item>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </Item>
  )
}
