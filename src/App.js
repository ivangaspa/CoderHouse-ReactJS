import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import products from "./data/Products";
import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

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
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer products={productsList} />
        </Route>
        <Route exact path="/item-details/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
