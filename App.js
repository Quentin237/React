import { Outlet } from "react-router-dom";
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div>
      <h1>Reattrapage React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Button variant="contained" href="/graphe">
        Graphique
        </Button> |{" "}
        <Button variant="contained" href="/tableau">
        tableau
        </Button> |{" "}
        <Button variant="contained" href="/qcm">
        QCM
        </Button>

      </nav>
      <Outlet/>
    </div>
  );
}