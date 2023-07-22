import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Updateproduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const params = useParams();

  const getData = async () => {
    let result = await fetch(`http://localhost:8080/api/product/getupdateproduct/${params.id}`)
    result = await result.json();
    setTitle(result.title);
    setBrand(result.brand);
    setCategory(result.category);
    setQuantity(result.quantity);
    setPrice(result.price);
  }

  const handleUpdateproduct = async () => {
    let response = await fetch(`http://localhost:8080/api/product/updateproduct/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, brand, category, quantity, price }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    response = await response.json();
    if (response) {
      navigate('/products');
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
            <span>Update Product</span>
          </div>
          <div className='bg-white p-4 rounded-xl'>
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
            <div className='flex flex-col gap-2 mb-2'>
              <label htmlFor="quantity">Product Quantity:</label>
              <input type="number" placeholder='Quantity' name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
            </div>
            <div className='flex flex-col gap-2 mb-4'>
              <label htmlFor="price">Product Price:</label>
              <input type="number" placeholder='Price' name="price" value={price} onChange={(e) => setPrice(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
            </div>
            <button className='btn btn-primary w-36' onClick={handleUpdateproduct}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
