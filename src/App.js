import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import './App.css';


function App() {
const [users, setUsers] = useState([])

  const addUserHendler = (username, age) => {
    setUsers([
      ...users,
      {username, age, id: Math.random().toString()}
    ])
  } 

  const deleteUser = (userInfo) => {
    setUsers([...userInfo])
  }
  return (
    <div className="App">
      <AddUser onAdd={addUserHendler}/>
      <UserList users={users} onDelete={deleteUser}/>
    </div>
  );
}

export default App;
