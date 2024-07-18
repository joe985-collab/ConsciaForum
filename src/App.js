// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Test from './routes/Test'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/test" element={<Test/>}/>
                  </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
