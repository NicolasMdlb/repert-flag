import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CountryManager from "./pages/country/CountryManager";
import CountryView from "./pages/country/CountryView";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="Catalog" element={<CountryManager />} />
          <Route path="Catalog/:name" element={<CountryView />} />
          <Route exact path="Map/" element={<h1>Coming soon Map</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
