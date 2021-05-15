import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    < >
      <span class="body-overlay"></span>
      <header className='section-header'>
        <div className="container">
          <div className="navbar navbar-top navbar-light border-bottom">
          <div class="nav language">
            <a href="/oz" class="nav-link  current "> O‘zb </a>
            <span class="divide">|</span>
            <a href="/uz" class="nav-link "> Ўзб </a>
            <span class="divide">|</span>
            <a href="/" class="nav-link "> Рус </a>
          </div>
          <div class="navbar-right">
              <ul class="nav nav-info">
                  <li><a href="#" class="nav-link"> Muddatli to’lov </a></li>
                  <li><a href="#" class="nav-link"> Chegirmalar </a></li>
                  <li><a href="#" class="nav-link"> Yetkazib berish </a></li>
                  <li><a href="#" class="nav-link"> Yordam </a></li>
                  <li><a href="#" class="nav-link js-compare-link text-danger"> Taqqoslash </a>
                  </li>
              </ul>
              <div class="dark-mode-button">
                  <div class="shape"></div>
                  <div class="sun"></div>
              </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
