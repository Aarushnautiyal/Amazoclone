import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {BrowserRouter,Route} from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
    <div className = "grid-container">
        <header className="row">
            <div><a className="brand" href="/">Amazoclone</a></div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">SignIn</a>
            </div>
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
        </main>
        <footer className="row center">All rights are reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
