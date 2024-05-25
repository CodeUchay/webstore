import React from 'react';
import ImageSlider from './components/ImageSlider/ImageSlider';
import './App.css';
import CustomerTable from './components/Table/Customer/protable with pagination/CustomerTable';
import OrderTable from './components/Table/Order/protable_receipt/OrderTable';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

const App = () => {
  return (
    <div className="App">
      <OrderTable/>
    </div>
  );
};

export default App;
