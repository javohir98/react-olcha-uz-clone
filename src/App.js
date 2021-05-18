import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './components/pages/Home'

function App() {
  return (
    < >
      <span class="body-overlay"></span>
      <Header />
      <Home />
    </>
  );
}

export default App;
