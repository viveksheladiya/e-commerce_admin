import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

export const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  const [tid, setTId] = useState(uuid());

  const getTransaction = async () => {
    let result = await fetch('http://localhost:8080/api/order/getorder', {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    });
    result = await result.json();
    setTransaction(result);
  }

  const deleteTransaction = async (id) => {
    let result = await fetch(`http://localhost:8080/api/order/deleteorder/${id}`, {
      method: "DELETE"
    })
    result = await result.json();
    if (result) {
      getTransaction();
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className='w-full'>
      <div className='w-full h-full p-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Transaction</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <input type="text" placeholder='Search Customer' className='w-[500px] h-10 p-3 rounded-lg outline-none ' />
        </div>
        <div>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='font-bold'>
                <td>Transaction ID</td>
                <td>Paid Amount</td>
                <td>Method</td>
                <td>Created</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {transaction.map(data => {
                return (
                  <tr key={data._id}>
                    <td>{tid}</td>
                    <td>{data.payment}</td>
                    <td>Master Card</td>
                    <td>20:07:2023, 12:15</td>
                    <td className='flex justify-around'>
                      <button className='btn btn-primary'> <NavLink to={'/transactiondetail/' + data._id} className='nav-link'>View</NavLink></button>
                      <button className='btn btn-danger' onClick={() => deleteTransaction(data._id)}>Delete</button>
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
