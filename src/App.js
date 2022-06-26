import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CountryManager from "./pages/country/CountryManager";
import CountryView from "./pages/country/CountryView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="Countries" element={<CountryManager />}></Route>
          <Route path="Countries/:name" element={<CountryView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
