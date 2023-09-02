import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.js";
import { Auth } from "./pages/auth.js";
import { SavedRecipe } from "./pages/savedRecipe.js";
import { CreateRecipe } from "./pages/createRecipe.js";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
