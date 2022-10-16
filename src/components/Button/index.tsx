import SubmitButton from './styles';

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
}

function Button(props: IProps) {
  const { children, type = 'button' } = props;

  return (
    <SubmitButton type={type}>
      {children}
    </SubmitButton>
  )
}

export default Button;
