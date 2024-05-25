export const orderData = [
  {
    id: 1,
    customerName: 'John Doe',
    address: '123 Main St, Anytown, USA',
    phone: '555-1234',
    email: 'john.doe@example.com',
    items: [
      { id: 1, name: "item1", quantity: '1', price: 25 },
      { id: 2, name: "item2", quantity: '2', price: 25 }
    ],
    totalItemPrice: 75.0,
    paymentMethod: 'Credit Card',
    deliveryCharge: 10.0,
    total: 85.0,
    date: '2024-05-01',
    trackingNumber: '1234567890',
    status: 'Processing',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    address: '456 Elm St, Othertown, USA',
    phone: '555-5678',
    email: 'jane.smith@example.com',
    items: [
      { id: 3, name: "item3", quantity: '1', price: 30 },
      { id: 4, name: "item4", quantity: '3', price: 20 }
    ],
    totalItemPrice: 90.0,
    paymentMethod: 'PayPal',
    deliveryCharge: 15.0,
    total: 105.0,
    date: '2024-05-02',
    trackingNumber: '2345678901',
    status: 'Shipping',
  },
  {
    id: 3,
    customerName: 'Alice Johnson',
    address: '789 Oak St, Sometown, USA',
    phone: '555-9012',
    email: 'alice.johnson@example.com',
    items: [
      { id: 5, name: "item5", quantity: '2', price: 50 },
      { id: 6, name: "item6", quantity: '1', price: 40 }
    ],
    totalItemPrice: 140.0,
    paymentMethod: 'Credit Card',
    deliveryCharge: 20.0,
    total: 160.0,
    date: '2024-05-03',
    trackingNumber: '3456789012',
    status: 'Delivered',
  },
  {
    id: 4,
    customerName: 'Bob Brown',
    address: '321 Pine St, Anytown, USA',
    phone: '555-3456',
    email: 'bob.brown@example.com',
    items: [
      { id: 7, name: "item7", quantity: '1', price: 25 },
      { id: 8, name: "item8", quantity: '4', price: 10 }
    ],
    totalItemPrice: 65.0,
    paymentMethod: 'Debit Card',
    deliveryCharge: 10.0,
    total: 75.0,
    date: '2024-05-04',
    trackingNumber: '4567890123',
    status: 'Processing',
  },
  {
    id: 5,
    customerName: 'Cathy White',
    address: '654 Birch St, Othertown, USA',
    phone: '555-7890',
    email: 'cathy.white@example.com',
    items: [
      { id: 9, name: "item9", quantity: '3', price: 15 },
      { id: 10, name: "item10", quantity: '2', price: 25 }
    ],
    totalItemPrice: 95.0,
    paymentMethod: 'PayPal',
    deliveryCharge: 12.0,
    total: 107.0,
    date: '2024-05-05',
    trackingNumber: '5678901234',
    status: 'Shipping',
  },
  {
    id: 6,
    customerName: 'David Green',
    address: '987 Cedar St, Sometown, USA',
    phone: '555-1233',
    email: 'david.green@example.com',
    items: [
      { id: 11, name: "item11", quantity: '1', price: 60 },
      { id: 12, name: "item12", quantity: '1', price: 35 }
    ],
    totalItemPrice: 95.0,
    paymentMethod: 'Credit Card',
    deliveryCharge: 15.0,
    total: 110.0,
    date: '2024-05-06',
    trackingNumber: '6789012345',
    status: 'Delivered',
  },
  {
    id: 7,
    customerName: 'Eva Blue',
    address: '159 Spruce St, Newtown, USA',
    phone: '555-9876',
    email: 'eva.blue@example.com',
    items: [
      { id: 13, name: "item13", quantity: '2', price: 40 },
      { id: 14, name: "item14", quantity: '1', price: 50 }
    ],
    totalItemPrice: 130.0,
    paymentMethod: 'Debit Card',
    deliveryCharge: 20.0,
    total: 150.0,
    date: '2024-05-07',
    trackingNumber: '7890123456',
    status: 'Processing',
  },
  {
    id: 8,
    customerName: 'Frank Black',
    address: '852 Maple St, Newtown, USA',
    phone: '555-4321',
    email: 'frank.black@example.com',
    items: [
      { id: 15, name: "item15", quantity: '4', price: 20 },
      { id: 16, name: "item16", quantity: '1', price: 30 }
    ],
    totalItemPrice: 110.0,
    paymentMethod: 'Credit Card',
    deliveryCharge: 10.0,
    total: 120.0,
    date: '2024-05-08',
    trackingNumber: '8901234567',
    status: 'Shipping',
  },
  {
    id: 9,
    customerName: 'Grace White',
    address: '753 Walnut St, Anytown, USA',
    phone: '555-6543',
    email: 'grace.white@example.com',
    items: [
      { id: 17, name: "item17", quantity: '2', price: 45 },
      { id: 18, name: "item18", quantity: '3', price: 15 }
    ],
    totalItemPrice: 135.0,
    paymentMethod: 'PayPal',
    deliveryCharge: 15.0,
    total: 150.0,
    date: '2024-05-09',
    trackingNumber: '9012345678',
    status: 'Delivered',
  },
  {
    id: 10,
    customerName: 'Henry Grey',
    address: '951 Chestnut St, Othertown, USA',
    phone: '555-3210',
    email: 'henry.grey@example.com',
    items: [
      { id: 19, name: "item19", quantity: '1', price: 100 },
      { id: 20, name: "item20", quantity: '2', price: 20 }
    ],
    totalItemPrice: 140.0,
    paymentMethod: 'Credit Card',
    deliveryCharge: 20.0,
    total: 160.0,
    date: '2024-05-10',
    trackingNumber: '0123456789',
    status: 'Processing',
  },
  {
    id: 11,
    customerName: 'Ivy Green',
    address: '147 Willow St, Sometown, USA',
    phone: '555-7891',
    email: 'ivy.green@example.com',
    items: [
      { id: 21, name: "item21", quantity: '3', price: 15 },
      { id: 22, name: "item22", quantity: '4', price: 10 }
    ],
    totalItemPrice: 95.0,
    paymentMethod: 'Debit Card',
    deliveryCharge: 10.0,
    total: 105.0,
    date: '2024-05-11',
    trackingNumber: '1234567890',
    status: 'Shipping',
  },
  {
    id: 12,
    customerName: 'Jackie Brown',
    address: '369 Poplar St, Anytown, USA',
    phone: '555-2345',
    email: 'jackie.brown@example.com',
    items: [
      { id: 23, name: "item23", quantity: '1', price: 75 },
      { id: 24, name: "item24", quantity: '2', price: 25 }
    ],
    totalItemPrice: 125.0,
    paymentMethod: 'PayPal',
    deliveryCharge: 15.0,
    total: 140.0,
    date: '2024-05-12',
    trackingNumber: '2345678901',
    status: 'Delivered',
  }
  ];
  