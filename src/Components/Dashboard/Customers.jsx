import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Customers = () => {
  const [customer, setCustomer] = useState([]);

  const getCustomer = async () => {
    let result = await fetch('http://localhost:8080/api/customer/getcustomer', {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    });
    result = await result.json();
    setCustomer(result);
  }

  const deleterCutomer = async (id) => {
    let result = await fetch(`http://localhost:8080/api/customer/deletecustomer/${id}`, {
      method: "DELETE"
    })
    result = await result.json();
    if (result) {
      getCustomer();
    }
  }

  const searchCustomer = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/api/customer/searchcustomer/${key}`);
      result = await result.json();
      if (result) {
        setCustomer(result);
      }
    } else {
      getCustomer();
    }
  }

  useEffect(() => {
    getCustomer();
  }, [])

  return (
    <div className='w-full'>
      {/* <div className='w-full h-full p-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Customers</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search Customer' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchCustomer} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink className='nav-link' to='/addcustomer'>Add Customer</NavLink></button>
          </div>
        </div>
        <div>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='font-bold'>
                <td>Customer ID</td>
                <td>Name</td>
                <td>Email Id</td>
                <td>Phone No</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {customer.map(customer => {
                return (
                  <tr key={customer._id}>
                    <td>{customer.cid}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td className='flex justify-around'>
                      <button className='btn btn-primary'><NavLink to={'/updatecustomer/' + customer._id} className="nav-link">Edit</NavLink></button>
                      <button className='btn btn-danger' onClick={() => deleterCutomer(customer._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div> */}
      <div className='container grid gap-4 py-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Customers</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search Product' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchCustomer} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink to='/addcustomer' className='nav-link'>Add Customer</NavLink></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {customer.map((data) => {
            return (
              <div className="grid" key={data._id}>
                <div className="shadow-md rounded-3xl bg-white">
                  {data.image && (
                    <img src={`http://localhost:8080/${data.image}`}
                      alt='customer-img'
                      className='p-3 rounded-3xl'
                    />
                  )}
                  <div className="flex flex-col items-start gap-2 p-3">
                    <span className="uppercase">Customer ID: {data.cid}</span>
                    <span>Customer Name: {data.name}</span>
                    <span>Email: {data.email}</span>
                  </div>
                </div>
                <div className='flex justify-around mt-3'>
                  <button className='btn btn-primary'><NavLink to={'/updatecustomer/' + data._id} className='nav-link'>Edit</NavLink></button>
                  <button className='btn btn-danger' onClick={() => deleterCutomer(data._id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
