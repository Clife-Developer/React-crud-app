import React from 'react'

function AddUserr(props) {
     const initialUserState=[{id:null,name:'',username:''}]
     const [user,setUser]= useState(initialUserState)
    return (
       <form>
           <label htmlFor="Name">Name</label>
           <input type="text" name="name" id="Name" value={user.name} onClick={HandleOnChange}/>

           <label htmlFor="Name">Username</label>
           <input type="text" name="name" id="Username" value={user.username} onClick={HandleOnChange}/>

           <button type="submit">Add</button>
       </form>
    )
}

export default AddUser
