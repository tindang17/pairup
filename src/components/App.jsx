import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Form from './Form.jsx';
import NameList from './NameList.jsx';
import PairupButton from './PairupButton.jsx';
import PairsList from './PairsList.jsx';
class App extends Component {
  state = {
    names: [],
    isPaired: false
  };
  addNameToList = word => {
    this.setState({names: this.state.names.concat(word)});
  };
  sort = (sortedNames) => {
    this.setState({
      names: sortedNames, 
      isPaired: true
    });
  }
  render() {
    return (
      <Fragment>
        <Form handleAdding={this.addNameToList} />
        {!this.state.isPaired ? <NameList names={this.state.names} /> : <PairsList names={this.state.names}/>}
        <PairupButton handleSort={this.sort} names={this.state.names}/>
      </Fragment>
    );
  }
}

export default hot(module)(App);