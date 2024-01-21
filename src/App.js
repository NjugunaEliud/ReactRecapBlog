
import './App.css';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router ,Routes , Route  } from "react-router-dom";
import NewsDetails from './NewsDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path='/' element={ <Home />} /> 
          <Route path='/create' element={  <Create />} />
          <Route path='/news/:id' element={  <NewsDetails />} />
         </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
