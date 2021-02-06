import React from 'react'

function EditUser(props) {
     const initialUserState=[{id:null,name:'',username:''}]
     const [users,setUsers]= useState(initialUserState)
    return (
       <form>
           <label htmlFor="Name">Name</label>
           <input type="text" name="name" id="Name" value={} onClick={HandleOnChange}/>

           <label htmlFor="Name">Username</label>
           <input type="text" name="name" id="Username" value={} onClick={HandleOnChange}/>

           <button type="submit">Edit</button>
       </form>
    )
}

export default EditUser
