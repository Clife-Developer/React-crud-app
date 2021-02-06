import logo from './logo.svg';
import './App.css';
import AddUser from './formComponent/add_user'
import EditUser from './formComponent/edit_user'
import ShowUsers from './tableComponent/showUsers'
import React,{useState} from 'react'
function App() {
  const userData=[{id:1,name:'Clife',username:'Mhlongo'}]
  const initialUserData=[{id:null,name:'',username:''}]

  const [users,setUsers]= useState(userData)
  const [currentUser,setCurrentUser]=useState(initialUserData)
  const [editing,setEditing]=useState(false)

  const addUser=(user)=>{
   userData.id=users.length+1;
    setUsers([...users,user])
  }

  const deleteRow=(id)=>{
    setEditing(false)
    setUsers(users.filter(user=>user.id !==id));
  }

  const updateRow=(id,updateUser)=>{
    setEditing(false)
    setUsers(users.map(user=>user.id ===id ? updateUser:user));
  }

  const editRow=(user)=>{
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }

  return (
    <div className="container">
        <h1>REACT HOOKS CRUDE APP</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <>
                <h1>Edit User</h1>
                <EditUser currentUser={currentUser} updateUser={updateRow}/>
              </>
            ):(
              <>
                <h1>Add User</h1>
                <AddUser addUser={addUser}/>
              </>
            )}
          </div>
        </div>
        <div className="flex-row">
          <ShowUsers users={users} editUser={editRow} deleteUser={deleteRow}/>
        </div>
    </div>
  );
}

export default App;
