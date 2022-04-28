import { Dashboard } from "./Components/Layouts/Dashboard";
import { NewUser } from "./Components/Pages/Users/NewUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Dashboard>
      <NewUser />
      </Dashboard> */}
      <Routes>
        {/* <Route path="a  " element={<Dashboard />}>
        <Route path="users" element={<NewUser />} />
        </Route> */}
        <Route path="home" element={<Dashboard />}>
          <Route path="users" element={<NewUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
