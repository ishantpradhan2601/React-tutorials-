import React, { useState, useEffect } from 'react';

const HTTPRequestmethod2 = () => {
    const [userData, setUserData] = useState([]);
    const [display, setdisplay] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data.users);
                setUserData(data.users);   // API returns { users: [...] }
            });
    }, []);
    const postData =()=>{
        
    }

    return (
        <div>
            <button onClick={() => setdisplay(!display)}>fetch</button>
            <button onClick={(postData)}>Post Data</button>
            {display && (
            <ul>

                {userData.map((item) => {
                    return (
                        <li key={item.id}>
                            ID: {item.id} <br />
                            FirstName: {item.firstName} <br />
                            LastName: {item.lastName} <br />
                            Gender: {item.gender} <br />
                            Email: {item.email} <br />
                            Phone: {item.phone} <br />
                        </li>
                    );
                })}
            </ul>
            )}
        </div>
    );
};

export default HTTPRequestmethod2;
