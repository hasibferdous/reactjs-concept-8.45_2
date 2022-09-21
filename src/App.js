import logo from './logo.svg';
import './App.css';

function App() {
const products = [
  {name: 'laptop', price: 154000},
  {name: 'mobile', price: 54000},
  {name: 'watch', price: 5400},
  {name: 'tablet', price: 8000},

]

  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product> */}
    
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

}

export default App;
