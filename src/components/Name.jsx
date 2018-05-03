import React from 'react';
import { css } from 'emotion';
const Name = (props) => {
  return (
    <p className={
      css`
        display: inline-block;
        margin: 5px;
        width: 100px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        text-align: center;
        `}>
      {props.children}
    </p>
  );
}

export default Name;