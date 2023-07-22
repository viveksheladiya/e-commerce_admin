import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddSeller = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sid, setSid] = useState('');
    const [image, setImage] = useState(null);

    const handleAddSeller = async () => {
        const formdata = new FormData();
        formdata.append('sid', sid);
        formdata.append('name', name);
        formdata.append('email', email);
        formdata.append('phone', phone);
        formdata.append('image', image);

        const result = await fetch('http://localhost:8080/api/seller/addseller', {
            method: "POST",
            body: formdata,
        });
        if (result) {
            navigate('/sellers');
        }
    }

    const handleImagefile = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className='w-full'>
            <div className='w-full h-full flex flex-col justify-start items-center p-10'>
                <div>
                    <div className='flex text-2xl font-bold mb-4'>
                        <span>New Seller</span>
                    </div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Seller Image:</label>
                            <input type="file" name="image" onChange={handleImagefile} className='form-control w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Seller Name:</label>
                            <input type="text" placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="email">Seller Email Id:</label>
                            <input type="text" placeholder='Email Id' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="phone">Seller Phone:</label>
                            <input type="text" placeholder="Phone No" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="address">Seller ID:</label>
                            <input type="text" placeholder='ID' name="sid" value={sid} onChange={(e) => setSid(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleAddSeller}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
