import {HomePage} from './pages/HomePage';
import {Checkout} from './pages/checkout/CheckoutPage';
import {Orders} from './pages/Orders'
import { Tracking} from './pages/TrackingPage'

import { Routes ,Route} from 'react-router';
import './App.css'

function App() {

  return (
    <Routes>
      <Route 
        index
        element={
        <HomePage />
        } />
        
      <Route 
       path='checkout'
       element={<Checkout />}
      />
      <Route 
       path='orders'
       element={<Orders />}
      />
      <Route 
       path='tracking'
       element={<Tracking />}
      />
      
    </Routes>
  )
}

export default App
