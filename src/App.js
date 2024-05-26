import React, {useState} from 'react';
import ImageSlider from './components/ImageSlider/proslidercarrouselandswipe/ImageSlider';
import './App.css';
import CustomerTable from './components/Table/Customer/protable with pagination/CustomerTable';
import OrderTable from './components/Table/Order/protable_receipt/OrderTable';
import CustomInput from './components/Input field/CustomInput';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

const App = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    setEmail(value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordError(value.length < 6);
  };

  return (
    <div >
      <OrderTable/>
    </div>
  );
};

export default App;
