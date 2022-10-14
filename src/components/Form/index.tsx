import React from 'react';
import Button from '../Button';
import Forms from './styles';

class Form extends React.Component {
  render() {
    return (
      <Forms>
        <div className="inputContainer">
          <label htmlFor="assignment">
            Adicione uma nova tarefa
          </label>
          <input 
            type="text"
            name="assignment"
            id="assignment"
            placeholder="Qual é a sua tarefa?"
            required
            />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </Forms>
    )  
  }
}

export default Form;
