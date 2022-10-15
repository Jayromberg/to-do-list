import React from 'react';
import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import AppStyle from './styles';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Form />
      <List />
      <Timer />
    </AppStyle>
  );
}

export default App;
