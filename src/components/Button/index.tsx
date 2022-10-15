import React from 'react';
import SubmitButton from './styles';

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
}

class Button extends React.Component<IProps> {
  render() {
    const { children, type = 'button' } = this.props;

    return (
      <SubmitButton type={type}>
        {children}
      </SubmitButton>
    )
  }
}

export default Button;
