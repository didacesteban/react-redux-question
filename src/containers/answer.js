import React, {Component} from 'react';
import {connect} from 'react-redux';

class Answer extends Component {
    render() {
        if (!this.props.answer) {
            return (<div>Ask something...</div>);
        }
        return (
            <div>
                <h2>{this.props.answer}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Answer);
