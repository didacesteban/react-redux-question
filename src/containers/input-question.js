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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        question: state.question
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({sendQuestion: sendQuestion}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InputQuestion);
