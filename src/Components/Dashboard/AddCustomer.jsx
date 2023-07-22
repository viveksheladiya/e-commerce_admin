import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddCustomer = () => {
    const navigate = useNavigate();
    const [cid, setCId] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);

    const handleAddCustomer = async () => {
        const formdata = new FormData();
        formdata.append('cid', cid);
        formdata.append('name', name);
        formdata.append('email', email);
        formdata.append('phone', phone);
        formdata.append('address', address);
        formdata.append('image', image);

        const result = await fetch('http://localhost:8080/api/customer/addcustomer', {
            method: "POST",
            body: formdata,
        });
        if (result) {
            navigate('/customers');
        }
    }

    const handleimagefile = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div className='w-full'>
            <div className='w-full h-full flex flex-col justify-start items-center p-10'>
                <div>
                    <div className='flex text-2xl font-bold mb-4'>
                        <span>New Customer</span>
                    </div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Customer Image:</label>
                            <input type="file" name="image" onChange={handleimagefile} className='form-control w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Customer ID:</label>
                            <input type="text" placeholder='ID' name="cid" value={cid} onChange={(e) => setCId(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Customer Name:</label>
                            <input type="text" placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="email">Customer Email Id:</label>
                            <input type="text" placeholder='Email Id' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="phone">Customer Phone:</label>
                            <input type="text" placeholder="Phone No" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="address">Customer Address:</label>
                            <input type="text" placeholder='Address' name="address" value={address} onChange={(e) => setAddress(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleAddCustomer}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
