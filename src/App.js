import logo from './logo.svg';
import './App.css';

function App() {
  const userData=[{id:1,name:'Clife',username:'Mhlongo'}]
  const initialUserData=[{id:null,name:'',username:''}]

  const [users,setUsers]= useState(userData)
  const [currentUser,setCurrentUser]=useState(initialUserData)
  const [editing,setEditing]=useState(false)
  return (
    <div className="container">
        <h1>REACT HOOKS CRUDE APP</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <>
                <h1>Edit User</h1>
                <EditUser/>
              </>
            ):(
              <>
                <h1>Add User</h1>
                <AddUser/>
              </>
            )}
          </div>
        </div>
    </div>
  );
}

export default App;
