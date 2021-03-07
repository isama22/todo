import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  const usersData = [
    {id: 1, name: 'tania', username: 'floppydiskette' },
    {id: 2, name: 'isa', username: 'squisa'},
    {id:3, name: 'paula', username: 'ppd'},
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  return (
    <div className="container">
      <h1>crud app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>add user </h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
