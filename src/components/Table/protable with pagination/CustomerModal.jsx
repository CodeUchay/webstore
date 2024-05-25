import React, { useState, useEffect } from 'react';

const CustomerModal = ({ isOpen, onClose, onSave, customer }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    status: 'active' // Default status
  });

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-4">{customer ? 'Edit Customer' : 'Add Customer'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Email:
            <input type="email" disabled={customer && "true"} name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <label className="block">
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 p-2 w-full" />
          </label>
          <div>
            <span>Status:</span>
            <label className="ml-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={handleChange}
                className="mr-1"
              />
              Active
            </label>
            <label className="ml-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={handleChange}
                className="mr-1"
              />
              Inactive
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerModal;
