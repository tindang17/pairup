import React from 'react';
import { css } from 'emotion';
const Name = (props) => {
  const renderName = () => {
    if (props.name) {
      return <p className={css`
            display: inline-block;
            margin: 5px;
            width: 100px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px;
            text-align: center;`}>
          {props.name}
        </p>;
    } else if (props.pair) {
      return (
        <section className={css`display:inline-block; width: 10rem; margin: 5px;`}>
          <p className={css`      
              margin: 5px;
              border: 1px solid black;
              border-radius: 5px;
              padding: 5px;
              text-align: center;
              font-weight: bold;`}>
            {props.pair[0]}
          </p> vs <p className={css`
              margin: 5px;
              border: 1px solid black;
              border-radius: 5px;
              padding: 5px;
              text-align: center;
              font-weight: bold;`}>
            {props.pair[1]}
          </p>
      </section>);
    }
  };
  return (    
    renderName() 
  );
}

export default Name;