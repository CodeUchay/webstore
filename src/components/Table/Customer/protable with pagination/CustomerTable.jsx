import React, { useState } from 'react';
import Modal from './Modal';
import CustomerModal from './CustomerModal';
import { customerdata } from './customers';
import Pagination from './Pagination';
import './CustomerTable.css'

const CustomerTable = () => {
  const [customers, setCustomers] = useState([...customerdata
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [bulkAction, setBulkAction] = useState('');

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

  const handleEditSave = (editedCustomer) => {
    setCustomers(customers.map(customer =>
      customer.id === editedCustomer.id ? editedCustomer : customer
    ));
    closeEditModal();
  };

  const handleSelectCustomer = (id) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((customerId) => customerId !== id) : [...prevSelected, id]
    );
  };

  const handleBulkActionChange = (e) => {
    setBulkAction(e.target.value);
  };

  const handleBulkActionApply = () => {
    if (bulkAction === 'activate' || bulkAction === 'deactivate') {
      setCustomers(customers.map((customer) =>
        selectedCustomers.includes(customer.id) ? { ...customer, status: bulkAction === 'activate' ? 'active' : 'inactive' } : customer
      ));
    }
    if (bulkAction === 'delete') {
      setCustomers(customers.filter(customer => !selectedCustomers.includes(customer.id)));
    }
    setSelectedCustomers([]);
    setBulkAction('');
  };
  const openNewCustomerModal = () => {
    setIsNewCustomerModalOpen(true);
  };

  const closeNewCustomerModal = () => {
    setIsNewCustomerModalOpen(false);
  };


  
  const handleNewCustomerSave = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    closeNewCustomerModal();
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );
  
// Pagination
const ITEMS_PER_PAGE = 5; // Number of items to display per page

const [currentPage, setCurrentPage] = useState(1);

// Calculate the index range for the current page
const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

// Function to handle page change
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

// Calculate total number of pages
const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);



  return (
    <div className=" p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Customer Table</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full max-w-md"
      />
      <div className="flex mb-4 justify-start items-center gap-5">
        <div>
        <select
          value={bulkAction}
          onChange={handleBulkActionChange}
          className="border border-gray-300 p-2 mr-2"
        >
          <option value="">Bulk Actions</option>
          <option value="activate">Activate</option>
          <option value="deactivate">Deactivate</option>
          <option value="delete">Delete</option>
        </select>
        <button
          onClick={handleBulkActionApply}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={!bulkAction || selectedCustomers.length === 0}
        >
          Apply
        </button>
        </div>
        <div >
      <button
          onClick={openNewCustomerModal}
          className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Add Customer
        </button></div>
      </div>
    
      <table className="min-w-full bg-white overflow-scroll ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b"><input type="checkbox" onChange={(e) => setSelectedCustomers(e.target.checked ? filteredCustomers.map(customer => customer.id) : [])} /></th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          { currentCustomers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input
                  type="checkbox"
                  checked={selectedCustomers.includes(customer.id)}
                  onChange={() => handleSelectCustomer(customer.id)}
                />
              </td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.address}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.phone}</td>
              <td className="py-2 px-4 border-b">{customer.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => openEditModal(customer)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => openDeleteModal(customer)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<Pagination  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this customer?</h2>
        <p>{selectedCustomer && selectedCustomer.name}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Yes
        </button>
        <button
          onClick={closeDeleteModal}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          No
        </button>
      </Modal>
      <CustomerModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={handleEditSave}
        customer={selectedCustomer}
      />

      <CustomerModal
        isOpen={isNewCustomerModalOpen}
        onClose={closeNewCustomerModal}
        onSave={handleNewCustomerSave}
      />
    </div>
  );
};

export default CustomerTable;
