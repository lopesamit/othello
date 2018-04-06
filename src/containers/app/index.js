import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import logo from '../../logo.svg';
import '../../App.css';
import Board from '../board'
import {
  changed,

} from '../../modules/reducer';


class App extends Component {

  steps="";
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextProps){
    this.steps = this.steps + (Object.keys(nextProps.arr[nextProps.count-1])) + " " + (Object.values(nextProps.arr[nextProps.count-1])) + " / ";
    return true;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Othello</h1>
        </header>
        <Board/>
        <p>Button history </p>
        <p>{this.steps} </p>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.reducer.count,
  value: state.reducer.value,
  arr: state.reducer.arr,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changed: () => {dispatch (changed());},    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


