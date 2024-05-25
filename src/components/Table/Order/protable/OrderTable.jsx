import React, { useState } from 'react';
import { orderData } from './orders'; // Sample order data
import Pagination from './Pagination'; // Import the Pagination component
import './OrderTable.css';

const OrderTable = () => {
  const [orders, setOrders] = useState(orderData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5; // Number of items to display per page

  const handleSortByDate = () => {
    const sortedOrders = [...orders].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setOrders(sortedOrders);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Order Table</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Items</th>
            <th className="py-2 px-4 border-b">Total Price</th>
            <th className="py-2 px-4 border-b">Tracking Number</th>
            <th className="py-2 px-4 border-b">Payment Method</th>
            <th className="py-2 px-4 border-b">Delivery Charge</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">
              <button onClick={handleSortByDate} className="underline">
                Date {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr key={order.id} className="hover:bg-gray-100 text-xs">
              <td className="py-2 px-4 border-b">{order.customerName}</td>
              <td className="py-2 px-4 border-b">{order.address}</td>
              <td className="py-2 px-4 border-b">{order.phone}</td>
              <td className="py-2 px-4 border-b">{order.email}</td>
              <td className="py-2 px-4 border-b">
                {order.items.map(item => (
                  <div key={item.id}>
                    {item.name} (x{item.quantity}) - ${item.price}
                  </div>
                ))}
              </td>
              <td className="py-2 px-4 border-b">{order.totalItemPrice}</td>
              <td className="py-2 px-4 border-b">{order.trackingNumber}</td>
              <td className="py-2 px-4 border-b">{order.paymentMethod}</td>
              <td className="py-2 px-4 border-b">${order.deliveryCharge}</td>
              <td className="py-2 px-4 border-b">${order.total}</td>
              <td className="py-2 px-4 border-b">{order.date}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border border-gray-300 p-2"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default OrderTable;
