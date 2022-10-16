import styled from "styled-components";

export const Item = styled.li`
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
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

  ${(props: { completed: boolean }) => {
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