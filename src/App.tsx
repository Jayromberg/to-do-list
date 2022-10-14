import React from 'react';
import Form from './components/Form';
import List from './components/List';
import AppStyle from './styles';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Form />
      <List />
    </AppStyle>
  );
}

export default App;
