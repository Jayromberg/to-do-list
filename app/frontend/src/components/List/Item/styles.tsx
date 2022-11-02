import styled from "styled-components";

interface IStyle {
  completed: boolean;
  selected: boolean;
}

export const Item = styled.li`
  background-color: ${(props: IStyle) => props.selected ? '#292929' : '#4D4D4D'};
  border-radius: 8px;
  box-shadow: ${(props: IStyle) => props.selected ? '2px 4px 4px #0000009F inset' : '2px 4px 4px #0000009F'};
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #D0D0D0;
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }

  ${(props: IStyle ) => {
    if (props.completed) {
      return `
      background-color: #566F42;
      cursor: auto;
      `
    }
  }}
`
export const Icon = styled.img`
  display: block;
  background-repeat: no-repeat;
  background-size: 38px 38px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 42px;
  height: 43px;
`