import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendQuestion} from '../actions/index'

class InputQuestion extends Component {
    render() {
      let question = 'question test';
        return (
            <div>
              <input type="text" />
              <button onClick={() => this.props.sendQuestion(question)}>send</button>
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
