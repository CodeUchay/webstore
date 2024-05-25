export const orderData = [
    {
      id: 1,
      customerName: 'John Doe',
      address: '123 Main St, Anytown, USA',
      phone: '555-1234',
      email: 'john.doe@example.com',
      items: [{id: 1, name: "item1", quantity: '1', price: 25}, {id: 2, name: "item2", quantity: '2', price: 25}],
      totalItemPrice: 75.0,
      paymentMethod: 'Credit Card',
      deliveryCharge: 10.0,
      total: 80.0,
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
      items: ['Item3', 'Item4'],
      trackingNumber: '0987654321',
      paymentMethod: 'PayPal',
      deliveryCharge: 15.0,
      date: '2024-05-02',
      status: 'Shipping',
    },
    // Add more orders as needed
  ];
  