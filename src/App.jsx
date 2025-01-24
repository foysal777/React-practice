
import './App.css'
import Home from './components/Home/Home'
import Service from './components/Service/Service';

function App() {

  return (
    <>
      <Home></Home>
      <div><h2>Welcome to React Md. foysal hossain Munna</h2> </div>
      <Service  name = 'Mamun'  age='20' ></Service>
      <Service name = 'Sohel' age = '22'></Service>
      <Service name = 'Rohan' age = '26'></Service>
      


    </>
  )

}
export default App;
