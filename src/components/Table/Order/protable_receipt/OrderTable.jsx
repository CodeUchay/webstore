import React, { useState } from "react";
import { orderData } from "./orders"; // Sample order data
import Pagination from "./Pagination"; // Import the Pagination component
import "./OrderTable.css";
import "./ToggleSwitch.css";
import ReceiptModal from "./ReceiptModal";
import CreateOrderModal from "./CreateOrderModal";
import Receipt from "./Receipt";
import GeneratePDF from "./GeneratePDF";

const OrderTable = () => {
  const [orders, setOrders] = useState(orderData);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const ITEMS_PER_PAGE = 5; // Number of items to display per page

  const handleSortByDate = () => {
    const sortedOrders = [...orders].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setOrders(sortedOrders);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const resetAndSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
     clearFilterOrdersByDate()
  };
  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone.includes(searchTerm) ||
      order.total.toString().includes(searchTerm) ||
      order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) 
  );


  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Receipt

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState([]);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  const handleGenerateReceipt = (order) => {
    setIsModalOpen(true);
    setReceiptDetails(order);
  };
  const handleGeneratePDF = (order) => {
    setReceiptDetails(order);
    setGeneratePdf(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [generatePdf, setGeneratePdf] = useState(false);
  const handleDownloadPDF = () => {
    setGeneratePdf(true);
  };
  const closePdfModal = () => {
    setGeneratePdf(false);
  };

  // New Order
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false)
  const openNewOrderModal = () => {
    setIsNewOrderModalOpen(true);
  };

  const closeNewOrderModal = () => {
    setIsNewOrderModalOpen(false);
  };
  const handleCreateOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    closeNewOrderModal();
  };


  // Download csv 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterOrdersByDate = () => {
    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      return (!start || orderDate >= start) && (!end || orderDate <= end);
    });
    return filteredOrders;
  };
  const showFilteredOrdersByDate = () => {
    setSearchTerm('')
    setOrders(filterOrdersByDate())
  };
  const clearFilterOrdersByDate = () => {
    setOrders(orderData)
    setEndDate('')
    setStartDate('')
  };

  const downloadCSV = () => {
    const filteredOrders = filterOrdersByDate();
    const csvContent = "data:text/csv;charset=utf-8," + [
      Object.keys(filteredOrders[0]).join(","),
      ...filteredOrders.map((order) =>
        Object.values(order)
          .map((value) => (typeof value === "string" ? `"${value}"` : value))
          .join(",")
      ),
    ].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Order Table</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => resetAndSearch(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full max-w-md"
      />
      <div className="flex flex-row gap-2 justify-between items-center mb-3">
        <div className="flex flex-row gap-2 items-center p-4">
        <h3 className="text-md mb-1">Show Customer Details: </h3>
        <label class="switch">
          <input class="switch-input" type="checkbox" onClick={() => setShowCustomerDetails(!showCustomerDetails)} />
          <span class="slider round"></span>
        </label></div>
        <div>
          <div className="flex flex-row gap-4">
        <div className="flex flex-row justify-center items-center">
          <label className="text-sm font-medium mr-4">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 py-1 placeholder: text-gray-400  px-2 w-48"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <label className="text-sm font-medium mr-4">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 py-1 placeholder: text-gray-400  px-2 w-48"
          />
        </div>
        <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => showFilteredOrdersByDate()}
      >
        Filter
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => clearFilterOrdersByDate()}
      >
        Reset
      </button>
          
      </div>
      
      </div><button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => downloadCSV()}
      >
        Download CSV
      </button>  <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setIsNewOrderModalOpen(true)}
      >
        Create Order
      </button>
      </div>
      
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-sm">
            <th className="py-1 px-2 border-b">Customer Name</th>
            {showCustomerDetails && (
              <>
                <th className="py-1 px-2 border-b">Address</th>
                <th className="py-1 px-2 border-b">Phone</th>
                <th className="py-1 px-2 border-b">Email</th>
              </>
            )}
            <th className="py-1 px-2 border-b">Items</th>
            <th className="py-1 px-2 border-b">Total Price</th>
            <th className="py-1 px-2 border-b">Tracking Number</th>
            <th className="py-1 px-2 border-b">Payment Method</th>
            <th className="py-1 px-2 border-b">Delivery Charge</th>
            <th className="py-1 px-2 border-b">Total</th>
            <th className="py-1 px-2 border-b">
              <button onClick={handleSortByDate} className="underline">
                Date {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </th>
            <th className="py-1 px-2 border-b">Status</th>
            <th className="py-1 px-2 border-b">Actions</th>
            <th className="py-1 px-2 border-b">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100 text-xs">
              <td className="py-1 px-2 border-b">{order.customerName}</td>
              {showCustomerDetails && (
                <>
                  <td className="py-1 px-2 border-b">{order.address}</td>
                  <td className="py-1 px-2 border-b">{order.phone}</td>
                  <td className="py-1 px-2 border-b">{order.email}</td>
                </>
              )}
              <td className="py-1 px-2 border-b">
                {order.items.map((item) => (
                  <div key={item.id} className="text-nowrap">
                    {item.name} (x{item.quantity}) - ${item.price}
                  </div>
                ))}
              </td>
              <td className="py-1 px-2 border-b">{order.totalItemPrice}</td>
              <td className="py-1 px-2 border-b">{order.trackingNumber}</td>
              <td className="py-1 px-2 border-b">{order.paymentMethod}</td>
              <td className="py-1 px-2 border-b">${order.deliveryCharge}</td>
              <td className="py-1 px-2 border-b">${order.total}</td>
              <td className="py-1 px-2 border-b text-nowrap">{order.date}</td>
              <td className="py-1 px-2 border-b">{order.status}</td>
              <td className="py-1 px-2 border-b">
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
              <td className=" py-1 px-2 border-b">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleGenerateReceipt(order)}
                >
                  View summary
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleGeneratePDF(order)}
                >
                  Generate Pdf
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <ReceiptModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Receipt receiptDetails={receiptDetails} />
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </ReceiptModal>
      <CreateOrderModal isOpen={isNewOrderModalOpen} onClose={closeNewOrderModal} onSave={handleCreateOrder}/>
  
      {generatePdf && (
        <GeneratePDF onClose={closePdfModal} receiptDetails={receiptDetails} />
      )}
    </div>
  );
};

export default OrderTable;
