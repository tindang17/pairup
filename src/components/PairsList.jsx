import React, { Component   } from 'react';
import styled from 'emotion';

class PairsList extends Component {
  state = {
    sortedArr: []
  }
  randomlySort = () => {
    const names = [...this.props.names];
    const arr = [];
    let element;
    let randomIndex;
    console.log(names); 
    while(names.length !== 0) {
      randomIndex = Math.floor(Math.random() * names.length);
      arr.push(names[randomIndex]);
      names.splice(randomIndex, 1);
    }
    this.setState({sortedArr: arr});
  }
  componentDidMount() {
    this.randomlySort();
  }
  render() {
    console.log('ggggg', this.state.sortedArr);
    return (
      <p>Hi</p>
    )
  }
}

export default PairsList;