import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddProducts = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const handleAddproduct = async () => {
        // let result = await fetch('http://localhost:8080/api/product/addproduct', ({
        //     method: "POST",
        //     body: JSON.stringify({ title, brand, category, quantity, price }),
        //     headers: {
        //         'Content-type': 'application/json',
        //     }
        // }))
        // result = await result.json();
        // navigate('/products');
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('brand', brand);
        formdata.append('category', category);
        formdata.append('price', price);
        formdata.append('image', image);

        const response = await fetch('http://localhost:8080/api/product/addproduct', {
            method: "POST",
            body: formdata,
        });
        if (response) {
            navigate("/products");
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
                        <span>New Product</span>
                    </div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="image">Product Image:</label>
                            <input type="file" name="image" onChange={handleimagefile} className='form-control w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="name">Product Name:</label>
                            <input type="text" placeholder='Name' name="title" value={title} onChange={(e) => setTitle(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="brand">Product Brand:</label>
                            <input type="text" placeholder='Brand' name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="category">Product Category:</label>
                            <input type="text" placeholder="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="price">Product Price:</label>
                            <input type="number" placeholder='Price' name="price" value={price} onChange={(e) => setPrice(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleAddproduct}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
