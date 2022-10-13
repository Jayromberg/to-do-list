import react from 'react';

function List() {
  return (
    <aside>
      <h2>Tarefas do dia</h2>
      <ul>
        <li>
          <h3>React</h3>
          <span>08:00:00</span>
        </li>
        <li>
          <h3>TypeScript</h3>
          <span>23:00:00</span>
        </li>
      </ul>
    </aside>
  )
}

export default List;
