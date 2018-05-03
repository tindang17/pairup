import React from 'react'; 
import styled, {css} from 'react-emotion';

const PairupButton = () => {
  const Button = styled.button`
    width: 40rem;
    margin: auto;
    display: block;
    padding: 0.375rem 0.75rem;
    background: #3A399A;
    color: white;
    &:focus {
      outline: none;
    }
    &:hover {
      background: black;
    }
    `;
  return (
    <Button>Pair Up</Button>
  );
};
export default PairupButton;
