import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateSeller = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [sid, setSid] = useState("");
    const params = useParams();

    const getData = async () => {
        let result = await fetch(`http://localhost:8080/api/seller/getupdateseller/${params.id}`)
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setPhone(result.phone);
        setSid(result.sid);
    }

    const handleUpdateseller = async () => {
        let response = await fetch(`http://localhost:8080/api/seller/editseller/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, email, phone, sid }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        response = await response.json();
        if (response) {
            navigate('/sellers');
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='w-full'>
            <div className='w-full h-full flex flex-col justify-start items-center p-10'>
                <div>
                    <div className='flex text-2xl font-bold mb-4'>
                        <span>Update Seller</span>
                    </div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Seller Name:</label>
                            <input type="text" placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="email">Seller Email ID:</label>
                            <input type="text" placeholder='Email Id' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="phone">Seller Phone No:</label>
                            <input type="text" placeholder="Phone No" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="sid">Seller ID:</label>
                            <input type="text" placeholder='ID' name="sid" value={sid} onChange={(e) => setSid(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleUpdateseller}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
