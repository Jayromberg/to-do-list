import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import Button from '../Button';
import FormStyles from './styles';

function Form() {
  const { tasks, setTasks } = useContext(GlobalStateContext)

  const [formState, setFormState] = useState({
    task: '',
    time: '00:00'
  })

  function addTask(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setTasks([...tasks, { ...formState, selected: false, completed: false, id: uuidv4() }]);
    setFormState({ task: '', time: '00:00' });
  }

  return (
    <FormStyles onSubmit={addTask}>
      <div className="inputContainer">
        <label htmlFor="assignment">
          Adicione uma nova tarefa
        </label>
        <input
          value={formState.task}
          onChange={e => setFormState({ ...formState, task: e.target.value })}
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
          value={formState.time}
          onChange={e => setFormState({ ...formState, time: e.target.value })}
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
    </FormStyles>
  )
}

export default Form;
