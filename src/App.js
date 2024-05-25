import React from 'react';
import ImageSlider from './components/ImageSlider/ImageSlider';
import './App.css';
import CustomerTable from './components/Table/protable with pagination/CustomerTable';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

const App = () => {
  return (
    <div className="App">
      <CustomerTable/>
    </div>
  );
};

export default App;
