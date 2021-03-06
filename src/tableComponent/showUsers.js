import React from 'react'

const ShowUsers=(props)=>(

    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0 ? (
                props.users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className="btn btn-success mr-2" onClick={()=>{props.editUser(user)}}>
                                Edit
                            </button>
                            <button className="btn btn-success" onClick={()=>{props.deleteUser(user.id)}} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)


export default ShowUsers
