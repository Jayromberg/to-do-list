import SubmitButton from './styles';

interface IProps {
  type?: "button" | "submit" | "reset" | undefined,
  children: string,
  onClick?: () => void,
}

function Button(props: IProps) {
  const { children, type = 'button', onClick } = props;

  return (
    <SubmitButton onClick={onClick} type={type}>
      {children}
    </SubmitButton>
  )
}

export default Button;
