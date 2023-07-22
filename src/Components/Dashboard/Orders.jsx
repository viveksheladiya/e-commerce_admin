import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Orders = () => {
  const [order, setOrder] = useState([]);

  const getorder = async () => {
    let result = await fetch('http://localhost:8080/api/order/getorder', {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    });
    result = await result.json();
    setOrder(result);
  }

  const deleteOrder = async (id) => {
    let result = await fetch(`http://localhost:8080/api/order/deleteorder/${id}`, {
      method: "DELETE"
    })
    result = await result.json();
    if (result) {
      getorder();
    }
  }

  const searchorder = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/api/order/searchorder/${key}`);
      result = await result.json();
      if (result) {
        setOrder(result);
      }
    } else {
      getorder();
    }
  }

  useEffect(() => {
    getorder();
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full h-full p-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Order</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search order' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchorder} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink className='nav-link' to='/addorder'>Add Order</NavLink></button>
          </div>
        </div>
        <div>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='font-bold'>
                <td>Order ID</td>
                <td>Product</td>
                <td>Quantity</td>
                <td>Category</td>
                <td>Payment</td>
                <td>Payment Status</td>
                <td>Order Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {order.map(order => {
                return (
                  <tr key={order._id}>
                    <td>{order.orderId}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.category}</td>
                    <td>{order.payment}</td>
                    <td>{order.paymentstatus}</td>
                    <td>{order.orderstatus}</td>
                    <td className='flex justify-around'>
                      <button className='btn btn-primary'><NavLink to={'/updateorder/' + order._id} className="nav-link">Edit</NavLink></button>
                      <button className='btn btn-danger' onClick={() => deleteOrder(order._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
