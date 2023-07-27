import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Products = () => {
  const [product, setProduct] = useState([]);
  const [searchproduct, setSearchProduct] = useState("");
  const [category, setCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;

  const filterdata = product.filter((products) => {
    const searchprodcutData = searchproduct === "" ||
      (products.brand && products.brand.toLowerCase().includes(searchproduct.toLowerCase()));

    const productCategory = category === "" || products.category === category;

    const productpricematch = productPrice === "" || products.price <= parseFloat(productPrice);

    return searchprodcutData && productpricematch && productCategory;
  })

  const lastProduct = currentPage * productPerPage;
  const firtsProduct = lastProduct - productPerPage;
  const currentproduct = filterdata.slice(firtsProduct, lastProduct);
  const totalPages = Math.ceil(filterdata.length / productPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div>
          <span className='font-bold text-3xl'>All Products</span>
        </div>
        <div className='w-full flex justify-end items-end'>
          <button className='btn btn-primary w-36'><NavLink to='/addproduct' className='nav-link'>Add Product</NavLink></button>
        </div>
        <div className='container grid gap-4'>
          <div className='flex justify-center items-center'>
            <span className='text-xl font-bold uppercase flex'>Filter Products</span>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 justify-center'>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-semibold text-xl mb-2'>Search Prodcuts</span>
              <input
                type="text"
                value={searchproduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                placeholder='Products Name'
                className='outline-2 outline-double w-56 h-8 pl-4 text-lg text-black' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-semibold text-xl mb-2'>Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='outline-2 outline-double w-56 cursor-pointer text-xl'
              >
                <option value="">All</option>
                <option value="Men's Clothing">Men's Wear</option>
                <option value="Women's Clothing">Women's Wear</option>
                <option value="Kid's Clothing">Children Wear</option>
              </select>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-semibold text-xl mb-2'>Price</span>
              <input
                type="text"
                placeholder='Price'
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className='w-56 pl-3 h-8 outline-2 outline-double'
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
          {currentproduct.map((data) => {
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
                      <span className="text-sm font-bold text-black">{data.title}</span>
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
        <div className='flex justify-center items-center mt-5'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
