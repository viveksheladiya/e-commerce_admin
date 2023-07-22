import React, { useEffect, useState } from 'react'
import { BsFillPersonFill, BsCalendar } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [payment, setPayment] = useState('');
  const [paymentstatus, setPaymentStatus] = useState('');
  const [orderstatus, setOrderStatus] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  // const currTime = new Date().toLocaleTimeString();
  // const currDate = new Date().toLocaleDateString();

  const getorderdetail = async () => {
    let result = await fetch(`http://localhost:8080/api/order/getupdateorder/${params.id}`)
    result = await result.json();
    setOrderId(result.orderId);
    setProduct(result.product);
    setQuantity(result.quantity);
    setCategory(result.category);
    setPayment(result.payment);
    setPaymentStatus(result.paymentstatus);
    setOrderStatus(result.orderstatus);
  }

  const handleOrderDetailsave = async () => {
    let result = await fetch(`http://localhost:8080/api/order/updateorder/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ orderId, product, quantity, category, payment, paymentstatus, orderstatus }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    result = await result.json();
    if (result) {
      navigate('/orders');
    }
  }

  useEffect(() => {
    getorderdetail();
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full h-full flex flex-col p-4'>
        <div className=''>
          <h2>Order Detail</h2>
        </div>
        <div className='w-full h-full flex flex-col bg-white mt-3 p-10'>
          <div className='flex justify-between'>
            <div className='flex justify-start items-start gap-2'>
              <div className='text-2xl'><BsCalendar /></div>
              <div className='flex flex-col'>
                {/* <span className='font-bold'>{currDate + " " +currTime}</span> */}
                <span className='text-slate-400'>{orderId}</span>
              </div>
            </div>
            <div className='flex gap-4'>
              <button className='btn btn-primary w-20' onClick={handleOrderDetailsave}>Save</button>
            </div>
          </div>
          <hr />
          <div className='flex mt-10 justify-between'>
            <div className='flex gap-3'>
              <div className='mt-1'>
                <BsFillPersonFill className='text-4xl bg-blue-500 text-white shadow-xl rounded-full' />
              </div>
              <div className='flex flex-col'>
                <span className="font-semibold text-xl">Customer</span>
                <span>Vivek Sheladiya</span>
                <span>viveksheladiya@gmail.com</span>
                <span>+91 9328444699</span>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='mt-1'>
                <FaTruck className='text-4xl bg-blue-500 text-white shadow-xl rounded-full' />
              </div>
              <div className='flex flex-col'>
                <span className="font-semibold text-xl">Customer</span>
                <span>Shipping: Cargo Express</span>
                <span>Payment Method: Card</span>
                <span>Status: {orderstatus}</span>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='mt-1'>
                <FaLocationDot className='text-4xl bg-blue-500 text-white shadow-xl rounded-full' />
              </div>
              <div className='flex flex-col'>
                <span className="font-semibold text-xl">Deliver To</span>
                <span>City: Surat, Gujarat</span>
                <span>Street: Mota varachha</span>
                <span className='w-full max-w-sm'>Address: A-403, Astha Residency, Abrama Road</span>
              </div>
            </div>
          </div>
          <div className='flex mt-5 gap-5'>
            <div className='w-2/3'>
              <table className='table table-bordered'>
                <thead>
                  <tr className='font-bold text-sm'>
                    <td>Product</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Payment Status</td>
                    <td>OrderStatus</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className='w-full h-full outline-none' value={product} onChange={(e) => setProduct(e.target.value)} /></td>
                    <td><input type="number" className='w-full h-full outline-none' value={quantity} onChange={(e) => setQuantity(e.target.value)} /></td>
                    <td><input type="text" className='w-full h-full outline-none' value={payment} onChange={(e) => setPayment(e.target.value)} /></td>
                    <td><input type="text" className='w-full h-full outline-none' value={paymentstatus} onChange={(e) => setPaymentStatus(e.target.value)} /></td>
                    <td><input type="text" className='w-full h-full outline-none' value={orderstatus} onChange={(e) => setOrderStatus(e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='bg-slate-100 w-1/3'>
              <div className='p-2 flex flex-col'>
                <span className='text-md font-bold mb-1'>Payment Info</span>
                <span>Master Card **** **** 4242</span>
                <span>Business name: Master Card, inc.</span>
                <span>Phone: +91 9328444699</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
