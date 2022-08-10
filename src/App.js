import Welcome from "./pages/Welcome";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PlantsList from "./components/PlantsList/PlantsList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Orders from "./components/Orders/Orders";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/categories" element={<PlantsList/>}/>
        <Route path="/ItemDetail" element={<ItemDetail/>}/>
        <Route path="/Orders" element={<Orders/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
