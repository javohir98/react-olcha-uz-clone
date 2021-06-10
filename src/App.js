import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './components/Header';
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import { Route, Switch } from 'react-router';
import Footer from './components/Footer';
import ProductView from './components/pages/ProductView'

function App() {
  return (
    < >
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/product/:id'>
          <ProductView />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
