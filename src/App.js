import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ProductsLoad from "./components/ProductsLoad";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <p className = "mt-4 text-center greetingStyle">"Bienvenido a Brewed Beans! En esta tienda encontrará una gran variedad de productos para los amantes del Café"</p>
          </Route>
          <Route exact path="/products/:productGroup">
            <ProductsLoad />
          </Route>
          <Route exact path="/item-details/:productGroup/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
