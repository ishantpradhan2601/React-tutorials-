import React, { useEffect, useState } from 'react'

const Contact = () => {
    const qparam = new URLSearchParams(window.location.search);
    const id = qparam.get('id');
    const [users,setusers]= useState([]);

    useEffect(()=>{
        axios.get(`https://jasonplaceholder.typicode.com/users/${id}`).then((res)=>{
            setusers(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

  return (
    <div>
       <p>This is contact component </p>
       <p>Name: {users.name}</p>
       <p>Username :{users.username}</p>
       <p>Email: {users.email}</p>
       <p>Phone: {users.phone}</p>
    </div>
  )
}

export default Contact
