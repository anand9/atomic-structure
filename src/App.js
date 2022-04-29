import { Home } from "./Components/Layouts/Home";
import { NewUser } from "./Components/Pages/Users/NewUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />}>
          <Route path="users" element={<NewUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
