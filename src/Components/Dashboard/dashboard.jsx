import React from 'react'
import { Header } from './Header'
import { Route, Routes } from 'react-router-dom'
import { Products } from './Products';
import { Orders } from './Orders';
import { Customers } from './Customers';
import { Transaction } from './Transaction';
import { Seller } from './Seller';
import { Home } from './Home';
import { AddProducts } from './AddProducts';
import { Updateproduct } from './Updateproduct';
import { AddCustomer } from './AddCustomer';
import { UpdateCustomer } from './UpdateCustomer';
import { UpdateSeller } from './UpdateSeller';
import { AddSeller } from './AddSeller';
import { AddOrder } from './AddOrder';
import { UpdateOrder } from './UpdateOrder';
import { TransactionDetail } from './TransactionDetail';
import { Review } from './Review';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/addproduct' element={<AddProducts />} />
        <Route path='/addcustomer' element={<AddCustomer />} />
        <Route path='/addseller' element={<AddSeller />} />
        <Route path='/addorder' element={<AddOrder />} />
        <Route path='/updateproduct/:id' element={<Updateproduct />} />
        <Route path='/updatecustomer/:id' element={<UpdateCustomer />} />
        <Route path='/updateseller/:id' element={<UpdateSeller />} />
        <Route path='/updateorder/:id' element={<UpdateOrder />} />
        <Route path='/transactiondetail/:id' element={<TransactionDetail />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/review' element={<Review/>} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/sellers' element={<Seller />} />
      </Routes>
    </>
  )
}
