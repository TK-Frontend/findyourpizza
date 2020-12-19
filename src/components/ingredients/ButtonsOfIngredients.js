import styled from "styled-components";

const ButtonsOfIngredients = styled.button`
  display: flex;
  background-color: ${(props) => (props.active ? "red" : "white")};
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 3px;
  list-style: none;

  /* &:hover {
    cursor: pointer;
    background-color: grey;
  } */
`;

export default ButtonsOfIngredients;
