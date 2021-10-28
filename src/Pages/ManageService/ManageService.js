import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageService = () => {
    const [services, setService] = useState([])
    useEffect(()=>{
        const url = `http://localhost:5000/services`
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data =>setService(data))
    },[])

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // if you delete from ui 
            const remaining = services.filter(service=>service._id !== id)
            setService(remaining)
        })


    }
    return (
        <div>
            <h2>This is Manage service</h2>
            {
                services.map(service=> <div key={service._id}>
                    <h2>{service.name}</h2>
                   <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;