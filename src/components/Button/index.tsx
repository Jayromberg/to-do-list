import React from 'react';
import SubmitButton from './styles';

interface IProps {
  children: string;
}

class Button extends React.Component<IProps> {
  render() {
    return (
      <SubmitButton>
        {this.props.children}
      </SubmitButton>
    )
  }
}

export default Button;
