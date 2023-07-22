import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Seller = () => {
  const [seller, setSeller] = useState([]);

  const getseller = async () => {
    let result = await fetch('http://localhost:8080/api/seller/getseller', {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    });
    result = await result.json();
    setSeller(result);
  }

  const deleteSeller = async (id) => {
    let result = await fetch(`http://localhost:8080/api/seller/deleteseller/${id}`, {
      method: "DELETE"
    })
    result = await result.json();
    if (result) {
      getseller();
    }
  }

  const searchSeller = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/api/seller/searchseller/${key}`);
      result = await result.json();
      if (result) {
        setSeller(result);
      }
    } else {
      getseller();
    }
  }

  useEffect(() => {
    getseller();
  }, [])

  return (
    <div className='w-full'>
      <div className='container grid gap-4 py-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Seller</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search Seller' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchSeller} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink className="nav-link" to='/addseller'>Add Seller</NavLink></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {seller.map((data) => {
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
                    <span className="uppercase">Seller ID: {data.sid}</span>
                    <span>Seller Name: {data.name}</span>
                    <span>Email: {data.email}</span>
                  </div>
                </div>
                <div className='flex justify-around mt-3'>
                  <button className='btn btn-primary'><NavLink to={'/updatecustomer/' + data._id} className='nav-link'>Edit</NavLink></button>
                  <button className='btn btn-danger' onClick={() => deleteSeller(data._id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
