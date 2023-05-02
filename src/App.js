import { BrowserRouter } from 'react-router-dom';
import HomePage from './scenes/HomePage.jsx';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
