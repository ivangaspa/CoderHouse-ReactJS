import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import products from "./data/Products";

function App() {

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(products), 2000)
    })
  }

  fetchProducts().then((productsResolve) => {
      console.log(productsResolve)
  }).catch(error => console.log(error))

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer products={products} />

    </div>
  );
}

export default App;
