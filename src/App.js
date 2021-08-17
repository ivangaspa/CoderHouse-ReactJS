import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import products from "./data/Products";
import {useState, useEffect} from 'react';

function App() {

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => resolve(products), 2000)
      })
    }
    fetchProducts().then((productsResolve) => {
      setProductsList(productsResolve);
    }).catch(error => console.log(error))
  }, []);
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer products={productsList} />
      <ItemDetailContainer id="0" />
      <ItemDetailContainer id="1" />
      <ItemDetailContainer id="2" />
      <ItemDetailContainer id="3" />
    </div>
  );
}

export default App;
