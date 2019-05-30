import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendQuestion, clearQuestion} from '../actions/index'


class InputQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }

 render() {
        return (
            <div>
              <input type="text" onClick={() => this.props.clearQuestion(this.state.value)} value={this.state.value} onChange={this.handleChange} />
              <button onClick={() => this.props.sendQuestion(this.state.value)}>Send!</button>
              <hr/>
              <h2>{this.props.question}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        question: state.questionActions
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({sendQuestion: sendQuestion, clearQuestion: clearQuestion}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InputQuestion);
