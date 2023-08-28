import logo from './logo.svg';
import './App.css';
// import { card } from "./components/card.js";
import threeCard from './components/threeCard';



function App() {
  return (
    <div className='App'>
      {threeCard()}
    </div>
  );
}

export default App;
