import './App.css';
import Header from './comp/header/Header.jsx';
import Top from './comp/top/Top.jsx';
import Navi from './comp/nav/Navi.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Top />
      <Header />
      <Navi />
      
    </div>
  );
}

export default App;