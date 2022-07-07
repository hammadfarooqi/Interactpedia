import './App.css';
import {Grid} from "@mui/material"

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item sm={6} md={6} lg={6}>
          <p>Hj</p>
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <p>HJ</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
