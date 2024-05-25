// Receipt.js
import React from 'react';

const Receipt = ({ receiptDetails }) => {

  return (
    <div>
      <h2>Receipt</h2>
        <div key={receiptDetails.id}>
          <p>Customer Name: {receiptDetails.customerName}</p>
          <p>Address: {receiptDetails.address}</p>
          <p>Phone: {receiptDetails.phone}</p>
          <p>Email: {receiptDetails.email}</p>
          <p>Items:</p>
          <ul>
            {receiptDetails.items.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
          <p>Total Item Price: ${receiptDetails.totalItemPrice}</p>
          <p>Payment Method: {receiptDetails.paymentMethod}</p>
          <p>Delivery Charge: ${receiptDetails.deliveryCharge}</p>
          <p>Total: ${receiptDetails.total}</p>
          <p>Date: {receiptDetails.date}</p>
          <p>Tracking Number: {receiptDetails.trackingNumber}</p>
          <p>Status: {receiptDetails.status}</p>
          {/* Display image here if available */}
          {receiptDetails.image && <img src={receiptDetails.image} alt="Order Image" />}
          <hr />
        </div>
        <button className='bg-blue-500 text-white px-2 py-1 rounded m-2' onClick={() => window.print()}>Print Receipt</button>
    </div>
  );
};

export default Receipt;
