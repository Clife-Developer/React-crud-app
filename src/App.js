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
    const {id,name,username}=user;
      //userData.id=users.length+1;

    setUsers([...users,{id:users.length+1,name,username}])
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
    <div className="container pt-3">
        <h1 className="bg-primary rounded p-2 text-light text-center">REACT HOOKS CRUD APP</h1>
        <div className="row">
          <div className="col-lg-5">
            {editing ? (
              <div>
                <h1 className="text-primary">Edit User</h1>
                <EditUser currentUser={currentUser} updateUser={updateRow}/>
              </div>
            ):(
              <div>
                <h1 className="text-primary">Add User</h1>
                <AddUser addUser={addUser}/>
              </div>
            )}
          </div>
        <div className="col-lg-5">
          <h1 className="text-primary">Users List</h1>
          <ShowUsers users={users} editUser={editRow} deleteUser={deleteRow}/>
        </div>
       </div>
    </div>
  );
}

export default App;
