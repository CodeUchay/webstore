import React, { useState } from 'react';
import Modal from 'react-modal';
import './CustomerTable.css';

Modal.setAppElement('#root'); // Required for accessibility

const CustomerTable = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', address: '123 Elm St', email: 'john@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Oak St', email: 'jane@example.com', phone: '555-5678' },
    { id: 3, name: 'Jim Brown', address: '789 Pine St', email: 'jim@example.com', phone: '555-8765' },
    { id: 4, name: 'Jake White', address: '101 Maple St', email: 'jake@example.com', phone: '555-4321' },
    // Add more dummy data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openDeleteModal = (customer) => {
    setSelectedCustomer(customer);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedCustomer(null);
  };

  const openEditModal = (customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = () => {
    setCustomers(customers.filter(customer => customer.id !== selectedCustomer.id));
    closeDeleteModal();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer({ ...selectedCustomer, [name]: value });
  };

  const handleEditSave = () => {
    setCustomers(customers.map(customer =>
      customer.id === selectedCustomer.id ? selectedCustomer : customer
    ));
    closeEditModal();
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Customer Table</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => openEditModal(customer)}>Edit</button>
                <button onClick={() => openDeleteModal(customer)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Are you sure you want to delete this customer?</h2>
        <p>{selectedCustomer && selectedCustomer.name}</p>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={closeDeleteModal}>No</button>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Customer"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Edit Customer</h2>
        {selectedCustomer && (
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={selectedCustomer.name}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={selectedCustomer.address}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={selectedCustomer.email}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={selectedCustomer.phone}
                onChange={handleEditChange}
              />
            </label>
            <button type="button" onClick={handleEditSave}>Save</button>
            <button type="button" onClick={closeEditModal}>Cancel</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default CustomerTable;
