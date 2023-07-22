import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddOrder = () => {
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [payment, setPayment] = useState("");
    const [paymentstatus, setPaymentStatus] = useState("");
    const [orderstatus, setOrderStatus] = useState("");

    const handleAddOrder = async () => {
        let result = await fetch('http://localhost:8080/api/order/addorder', ({
            method: "POST",
            body: JSON.stringify({ orderId, product, quantity, category, payment, paymentstatus, orderstatus }),
            headers: {
                'Content-type': 'application/json',
            }
        }))
        result = await result.json();
        navigate('/orders');
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
                            <label htmlFor="Oid">Order ID:</label>
                            <input type="text" placeholder='ID' name="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="Name">Product Name:</label>
                            <input type="text" placeholder='Name' name="product" value={product} onChange={(e) => setProduct(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="quantity">Product Quantity:</label>
                            <input type="Number" placeholder='Product Quantity' name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="category">Product Category:</label>
                            <input type="text" placeholder="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="payment">Payment:</label>
                            <input type="number" placeholder='Payment' name="payment" value={payment} onChange={(e) => setPayment(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <label htmlFor="paymetnstatus">Payment Status:</label>
                            <input type="text" placeholder='Payment Status' name="paymentstatus" value={paymentstatus} onChange={(e) => setPaymentStatus(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="status">Order Status:</label>
                            <input type="text" placeholder='Order Status' name="orderstatus" value={orderstatus} onChange={(e) => setOrderStatus(e.target.value)} className='w-[400px] h-9 border rounded-lg outline-none pl-3' />
                        </div>
                        <button className='btn btn-primary w-36' onClick={handleAddOrder}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
