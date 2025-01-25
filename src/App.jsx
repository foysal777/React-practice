
import './App.css'
import DataVar from './components/DataVariable/DataPass';
import Data from './components/Fetch/Fetch';
import Home from './components/Home/Home'
import Service from './components/Service/Service';
import Change from './components/UseState/UseState';




function App() {

  const products =

    [
      {
        'name': 'Iphone 17 pro',
        'price': 1600000
      },
      {
        'name': 'Iphone 11 pro',
        'price': 1100000
      }, {
        'name': 'Pixel 17 pro',
        'price': 1900000
      }
    ]

  return (
    <>
      <Home></Home>
      <div><h2>Welcome to React Md. foysal hossain Munna</h2> </div>
      <Service name='Mamun' age='20' ></Service>
      <Service name='Sohel' age='22'></Service>
      <Service name='Rohan' age='26'></Service>
      {

        products.map(product =>
     
         <DataVar product = {product} ></DataVar>)
      }
       <Change></Change>

        <Data></Data>
    </>
  )

}
export default App;
