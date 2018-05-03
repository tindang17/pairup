import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Form from './Form.jsx';
import NameList from './NameList.jsx';
import PairupButton from './PairupButton.jsx';
import PairsList from './PairsList.jsx';
class App extends Component {
  state = {
    names: [
      'a', 'asdasd', 'asdafr', 'ffwew'
    ],
    isPaired: true
  };
  addNameToList = word => {
    this.setState({names: this.state.names.concat(word)});
  };
  render() {
    return (
      <Fragment>
        <Form handleAdding={this.addNameToList} />
        {!this.state.isPaired ? <NameList names={this.state.names} /> : <PairsList names={this.state.names}/>}
        <PairupButton />
      </Fragment>
    );
  }
}

export default hot(module)(App);