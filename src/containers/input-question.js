import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendQuestion} from '../actions/index'


class InputQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

 render() {
      let question = 'question test';
        return (
            <div>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button onClick={() => this.props.sendQuestion(this.state.value)}>send</button>
              <hr/>
              <h2>{this.props.question}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        question: state.sendQuestion
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({sendQuestion: sendQuestion}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InputQuestion);
