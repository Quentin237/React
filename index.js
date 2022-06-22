import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Graphe from "./routes/graphe";
import Tableau from "./routes/tableau";
import QCM from "./routes/qcm"
import "./styles.css";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/graphe" element={<Graphe />} />
        <Route path="/tableau" element={<Tableau />} />
        <Route path="/qcm" element={<QCM />} />
      </Route>
    </Routes>
  </BrowserRouter>
);