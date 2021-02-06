import React,{useState} from 'react'

function AddUser(props) {
     const initialUserState=[{id:null,name:'',username:''}]
     const [user,setUser]= useState(initialUserState)

     const HandleOnChange=(e)=>{
      const {name,value}=e.target;
      setUser({
          ...user,[name]:value
      })
     }

      const HandleSubmit=(e)=>{
         e.preventDefault();
         if(user.name && user.username){
             props.addUser(user);
             setUser(initialUserState)
         } 
     }
    return (
       <form onSubmit={HandleSubmit}>
           <label htmlFor="Name">Name</label>
           <input type="text" name="name" id="Name" value={user.name} onChange={HandleOnChange}/>

           <label htmlFor="Name">Username</label>
           <input type="text" name="username" id="Username" value={user.username} onChange={HandleOnChange}/>

           <button type="submit">Add</button>
       </form>
    )
}

export default AddUser
