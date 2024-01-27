import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateCustomer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [cid, setCId] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    const getCustomerData = async () => {
        let result = await fetch(`http://localhost:8080/api/customer/getupdatecustomer/${params.id}`)
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setPhone(result.phone);
        setAddress(result.address);
        setCId(result.cid);
    }

    const handleupdatecustomer = async () => {
        let result = await fetch(`http://localhost:8080/api/customer/updatecustomer/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, email, phone, address, cid }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        if (result) {
            navigate('/customers');
        }
    }

    useEffect(() => {
        getCustomerData();
    })

    return (
        <div className='w-full'>
            <div className='w-full h-full flex flex-col justify-start items-center p-10'>
                <div>
                    <div className='flex text-2xl font-bold mb-4'>
                        <span>Update Product</span>
                    </div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="cid">Customer ID:</label>
                            <input type="text" placeholder='ID' name="cid" value={cid} onChange={(e) => setCId(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Customer Name:</label>
                            <input type="text" placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="brand">Customer Email Id:</label>
                            <input type="text" placeholder='Email Id' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="category">Customer Phone:</label>
                            <input type="text" placeholder="Phone No" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="quantity">Customer Address:</label>
                            <input type="text" placeholder='Address' name="address" value={address} onChange={(e) => setAddress(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleupdatecustomer}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
