import { ThemeProvider } from 'styled-components';

interface INode {
  children: React.ReactNode,
  selected: boolean,
}

function StyleProvider({ children, selected }: INode) {

  const selectedStyle ={
    background: '#292929',
    boxShadow: '2px 4px 4px #0000009F inset'
  }

  const style = {
    background: '#4D4D4D',
    boxShadow: '2px 4px 4px #0000009F'
  }

  return (
    <ThemeProvider theme={selected ? selectedStyle : style }>
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
