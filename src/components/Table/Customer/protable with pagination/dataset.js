const fs = require('fs');

// Function to generate a random customer
const generateRandomCustomer = (id) => {
  const names = ['John Doe', 'Jane Smith', 'Jim Brown', 'Jake White', 'Emily Johnson', 'Michael Davis', 'Sarah Wilson', 'David Martinez', 'Lisa Anderson', 'Robert Taylor'];
  const addresses = ['123 Elm St', '456 Oak St', '789 Pine St', '101 Maple St', '234 Cedar St', '567 Birch St', '890 Walnut St', '123 Oak St', '456 Elm St', '789 Maple St'];
  const emails = ['john@example.com', 'jane@example.com', 'jim@example.com', 'jake@example.com', 'emily@example.com', 'michael@example.com', 'sarah@example.com', 'david@example.com', 'lisa@example.com', 'robert@example.com'];
  const phones = ['555-1234', '555-5678', '555-8765', '555-4321', '555-9876', '555-3456', '555-7890', '555-6543', '555-2109', '555-8901'];
  const statuses = ['active', 'inactive'];

  const randomIndex = Math.floor(Math.random() * names.length);

  return {
    id: id,
    name: names[randomIndex],
    address: addresses[randomIndex],
    email: emails[randomIndex],
    phone: phones[randomIndex],
    status: statuses[Math.floor(Math.random() * statuses.length)]
  };
};

// Generate 50 random customers
const customers = [];
for (let i = 1; i <= 50; i++) {
  customers.push(generateRandomCustomer(i));
}

// Write customers to JSON file
fs.writeFileSync('customers.json', JSON.stringify(customers, null, 2));
