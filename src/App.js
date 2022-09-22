import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  
const products = [
  {name: 'laptop', price: 154000},
  {name: 'mobile', price: 54000},
  {name: 'watch', price: 5400},
  {name: 'tablet', price: 8000},

]

  return (
    <div className="App">
     {/* {
       products.map(product=> <Product name={product.name} price={product.price}></Product>)
       } */}
      // {/* <Product name="laptop" price="47000"></Product>
      // <Product name="phone" price="75000"></Product> */}
    <ExternalUsers></ExternalUsers>
    </div>
  );

  function Product(props){
    return (
      <div className="product">
        <h3>Name: {props.name}</h3>
        <p>Price: {props.price}</p>
      </div>
    )
  }

  function ExternalUsers(){
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    return (
      <div>
        <h2>External Users</h2>
        <p>{users.length}</p>
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
      </div>
    )
     
  function User(props){
    return (
      <div>
        <h3>Name: {props.name}</h3>
        <p>Email: {props.email}</p>
      </div>
    )
  }

}
}
export default App;

