import React,{useState,useEffect} from 'react'

function EditUser(props) {
    
     const [user,setUser]= useState(props.currentUser)

     const HandleOnChange=(e)=>{
      const {name,value}=e.target;
      setUser({
          ...user,[name]:value
      })
     }
     
     useEffect(() => {
         setUser(props.currentUser)
        return()=>null
     }, [props])

     const HandleSubmit=(e)=>{
         e.preventDefault();
          props.updateUser(user.id, user)
        }
    return (
       <form onSubmit={HandleSubmit}>
           <label htmlFor="Name">Name</label>
           <input type="text" name="name" id="Name" value={user.name} onChange={HandleOnChange}/>

           <label htmlFor="Name">Username</label>
           <input type="text" name="username" id="Username" value={user.username} onChange={HandleOnChange}/>

           <button type="submit">Edit</button>
       </form>
    )
}

export default EditUser
