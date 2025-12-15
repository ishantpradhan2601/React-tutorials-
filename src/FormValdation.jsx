import React, { useState } from 'react'

const FormValdation = () => {

    const [mydata,setmyData] = useState({
        username:"",
        password:"",
        email:""
        
    });
    const changeData=(e)=>{
        const{name,value}= e.target;
        setmyData((mydata)=>({...mydata,
            [name]:value
    }));}

    const handleSubmit=(e)=>{
        e.preventDefault();
        let username = "";
        let password = "";
        let email = "";
        if(!mydata.username){
            username="Username is required";
        }
        if(!mydata.password){
            password="Password is required";
        }
        if(!mydata.email){
            email="Email is required";
        }
        if(username || password || email){
            alert(`Please fill the following fields:\n${username}\n${password}\n${email}`);
        }
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Username: <input type="text" name="username" value={mydata.username} onChange={changeData} />
        <br />
        Password: <input type="password" name="password" value={mydata.password} onChange={changeData} />
        <br />
        Email: <input type="email" name="email" value={mydata.email} onChange={changeData} />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default FormValdation
