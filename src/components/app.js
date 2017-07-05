import React from 'react';
import InputQuestion from '../containers/input-question';
import Answer from '../containers/answer';
require('../scss/style.scss');

const App = () => (
    <div>
        <h2>Type your question</h2>
        <InputQuestion />
        <hr />
        <Answer />
    </div>
);

export default App;
