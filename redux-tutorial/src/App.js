import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount () {
    this.props.onApiRequest();
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Practice by Anny Chang</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>
            <input onChange={this.onUpdateUser}></input>
            <br/>
            {this.props.user}
          </h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
