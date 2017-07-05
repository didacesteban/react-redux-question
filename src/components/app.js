import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import InputQuestion from '../containers/input-question';
require('../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <InputQuestion />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
