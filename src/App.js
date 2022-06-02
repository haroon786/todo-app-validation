import { Fragment, useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/AddUser/UserList';
function App() {
  const [userList,UpdatedUserList]=useState([]);

  const AddUserHandler=(uname,uage)=>
  {
        UpdatedUserList((prevUserList)=>
        {
          return [...prevUserList, {name:uname,age:uage,id:Math.random()}]
        })
  }
  return (
   <Fragment>
    <AddUser onAddUser={AddUserHandler}></AddUser>
    <UserList userslist={userList}></UserList>
    </Fragment>
  );
}

export default App;
