import React, { useState } from 'react';

import './App.css';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevState) => {
      return ([
        ...prevState,
        {userId: Math.random().toString() , username: name, userAge: age}
      ]);
    })
  }

  const clearAllHandler = () => {
    setUsers([]);
  }

  return (
    <main>
      <h1>User Adder</h1>
      <UserForm 
        onAddUser={addUserHandler}
        onClearAll={clearAllHandler}
      />
      <UsersList 
        items={users}
      />
    </main>
  );
}

export default App;
