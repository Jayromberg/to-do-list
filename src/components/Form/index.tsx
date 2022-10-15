import React, { Dispatch, SetStateAction } from 'react';
import { ITasks } from '../../type/tasks';
import Button from '../Button';
import Forms from './styles';

class Form extends React.Component<{ setTasks: React.Dispatch<React.SetStateAction<ITasks[]>> }> {
  constructor(props: Readonly<{ setTasks: Dispatch<SetStateAction<ITasks[]>>; }>) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  state = {
    task: '',
    time: '00:00'
  } 

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((previous) => [...previous, { ...this.state }])
  }

  render() {
    return (
      <Forms onSubmit={this.addTask}>
        <div className="inputContainer">
          <label htmlFor="assignment">
            Adicione uma nova tarefa
          </label>
          <input
            value={this.state.task}
            onChange={e => this.setState({ ...this.state, task: e.target.value })}
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
            value={this.state.time}
            onChange={e => this.setState({ ...this.state ,time: e.target.value })}
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button 
          type="submit"
        >
          Adicionar
        </Button>
      </Forms>
    )  
  }
}

export default Form;
