import React, { useState } from 'react';

const CreateOrderModal = ({ isOpen, onClose, onSave }) => {


  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    phone: "",
    email: "",
    items: [],
    totalItemPrice: 0,
    paymentMethod: "",
    deliveryCharge: 0,
    total: 0,
    date: new Date().toISOString().split('T')[0], // Today's date
    trackingNumber: Math.floor(Math.random() * 10), // Random tracking number (0-9)
  });
  if (!isOpen) return null;
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', price: 0, quantity: 1 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    // Clear form after submission
    setFormData({
      customerName: "",
      address: "",
      phone: "",
      email: "",
      items: [],
      totalItemPrice: 0,
      paymentMethod: "",
      deliveryCharge: 0,
      total: 0,
      date: new Date().toISOString().split('T')[0], // Today's date
      trackingNumber: Math.floor(Math.random() * 10), // Random tracking number (0-9)
    });
    onClose(); // Close modal after submission
  };

  return (
    <div className={`fixed inset-0 overflow-auto bg-gray-900  bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full  relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>
        <div>
        <h2 className="text-xl font-bold mb-4">Create Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Customer Name:
            <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <div>
            {formData.items.map((item, index) => (
              <div key={index} className="space-y-2">
                <label className="block">
                  Item Name:
                  <input type="text" name="name" value={item.name} onChange={(e) => handleChange(e, index)} className="border border-gray-300 p-2 w-full" />
                </label>
                <label className="block">
                  Price:
                  <input type="number" name="price" value={item.price} onChange={(e) => handleChange(e, index)} className="border border-gray-300 p-2 w-full" />
                </label>
                <label className="block">
                  Quantity:
                  <input type="number" name="quantity" value={item.quantity} onChange={(e) => handleChange(e, index)} className="border border-gray-300 p-2 w-full" />
                </label>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderModal;
