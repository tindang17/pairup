import React, { Component   } from 'react';
import Name from './Name.jsx'
import {css} from 'emotion';

class PairsList extends Component {
  takeTwo = () => {
    let pair = [];
    const names = [...this.props.names];
    let i = 0;
    while (names.length !== 0) {
      pair.push(names.splice(i, 2));
    }
    return pair;     
  }
  render() {
    const pair = this.takeTwo().map(el => {
      return <Name pair={el} />;
    });
    return (
      <section className={css({
      margin: "auto",
      padding: "10px",
      overflowWrap: 'break-word',
      textAlign: "center" 
      })}>
        {pair}
      </section>
    )
  }
}

export default PairsList;