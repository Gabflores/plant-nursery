import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/login" element={<h1>Login</h1>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
