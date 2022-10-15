import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import GlobalStateProvider from './contexts/GlobalStateProvider';
import AppStyle from './styles';
import GlobalStyle from './UI/GlobalStyled';


function App() {
  return (
    <GlobalStateProvider>
      <AppStyle>
        <GlobalStyle />
        <Form />
        <List />
        <Timer />
      </AppStyle>
    </GlobalStateProvider>
  );
}

export default App;
