import React from 'react';
import Form from './components/Form';
import List from './components/List';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
      <List />
    </div>
  );
}

export default App;
