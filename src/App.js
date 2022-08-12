import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";


function App() {
  return (
    <div className="App scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<NewProduct />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
