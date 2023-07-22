import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export const Products = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch('http://localhost:8080/api/product/getproduct', {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    });
    response = await response.json();
    setProduct(response);
  }

  const deleteProduct = async (id) => {
    let response = await fetch(`http://localhost:8080/api/product/deleteproduct/${id}`, {
      method: "DELETE"
    });
    response = await response.json();
    if (response) {
      getProduct();
    }
  };

  const searchProduct = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/api/product/searchproduct/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getProduct();
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className='w-full'>
      {/* <div className='w-full h-full p-10'>
        <div className='mb-4'>
          <span className='font-bold text-3xl'>All Products</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search Product' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchProduct} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink to='/addproduct' className='nav-link'>Add Product</NavLink></button>
          </div>
        </div>
        <div>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='font-bold'>
                <td>Prodcut Image</td>
                <td>Product Name</td>
                <td>Product Brand</td>
                <td>Product Quantity</td>
                <td>Product Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {product.map(data => {
                return (
                  <tr key={data._id} className=''>
                    <td>
                      {data.image && (
                        <img src={`http://localhost:8080/${data.image}`}
                          alt={data.title}
                          style={{ width: '100px', height: '100px' }}
                        />
                      )}
                    </td>
                    <td>{data.title}</td>
                    <td>{data.brand}</td>
                    <td>{data.quantity}</td>
                    <td>{data.price}</td>
                    <td className=''>
                      <button className='btn btn-primary'><NavLink to={'/updateproduct/' + data._id} className='nav-link'>Edit</NavLink></button>
                      <button className='btn btn-danger' onClick={() => deleteProduct(data._id)}>Delete</button>
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
          <span className='font-bold text-3xl'>All Products</span>
        </div>
        <div className='w-full flex justify-between mb-10'>
          <div>
            <input type="text" placeholder='Search Product' className='w-[500px] h-10 p-3 rounded-lg outline-none ' onChange={searchProduct} />
          </div>
          <div className=''>
            <button className='btn btn-primary w-36'><NavLink to='/addproduct' className='nav-link'>Add Product</NavLink></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {product.map((data) => {
            return (
              <div className="grid" key={data._id}>
                <div className="shadow-md rounded-3xl bg-white">
                  {data.image && (
                    <img src={`http://localhost:8080/${data.image}`}
                      alt={data.title}
                      className='p-3 rounded-3xl'
                    />
                  )}
                  <div className="flex flex-row justify-around items-center p-3">
                    <div className="flex flex-col">
                      <span className="text-sm uppercase font-semibold">
                        {data.brand}
                      </span>
                      <span className="font-bold text-black">{data.title}</span>
                      <span className="font-bold text-[#088178]">
                        &#8377;{data.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-around mt-3'>
                  <button className='btn btn-primary'><NavLink to={'/updateproduct/' + data._id} className='nav-link'>Edit</NavLink></button>
                  <button className='btn btn-danger' onClick={() => deleteProduct(data._id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
