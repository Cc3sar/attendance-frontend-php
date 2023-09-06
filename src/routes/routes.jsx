import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../componets/Container/Main";
import Example from "../pages/Example/Example";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route
          path=""
          element={
            <Main>
              <Example />
            </Main>
          }
        />
      </Routes>
    </Router>
  );
};

export default Rutas;
