import React, { Component } from 'react'; 
import styled, {css} from 'react-emotion';

class PairupButton extends Component {
   state = {
    sortedArr: []
  }
  randomlySort = () => {
    const names = [...this.props.names];
    const arr = [];
    let element;
    let randomIndex;
    while(names.length !== 0) {
      randomIndex = Math.floor(Math.random() * names.length);
      arr.push(names[randomIndex]);
      names.splice(randomIndex, 1);
    }
    this.setState({
      sortedArr: arr
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sortedArr[0] === this.state.sortedArr[0]? false : true;
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.handleSort(this.state.sortedArr);
  }
  button = () => {
    return styled.button`
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
  }
  render() {
    const Button = this.button();
    return (
      <Button onClick={this.randomlySort}>Pair Up</Button>
    );
  }
};
export default PairupButton;
