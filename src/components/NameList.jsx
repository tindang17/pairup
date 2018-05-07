import React from 'react';
import Name from './Name.jsx';
import { css } from 'emotion'
const NameList = (props) => {
  const name = props.names.map((name, i) => {
    return <Name key={i} name={name}/>;
  });
  return (
    <section className={css({
      width: "40rem",
      margin: "auto",
      padding: "10px",
      overflowWrap: 'break-word',
      textAlign: "center" 
    })}>
    {name}
    </section>
  );
}

export default NameList;