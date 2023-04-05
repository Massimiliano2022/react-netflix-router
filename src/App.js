import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './assets/img/logo.png';
import './App.css';
import MyNavBar from './components/MyNavBar';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <MyNavBar imgSrc={logo}/>
      <Main/>
    </div>
  );
}

export default App;
