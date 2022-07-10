import './App.css'
import {useState } from "react"
import {Grid} from "@mui/material"
import TextDisplay from "./components/TextDisplay"
import Question from "./components/Question"
import Header from "./components/Header"
import raw from "./article.txt"

function App() {

  const [parsed, setParsed] = useState([])

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setParsed(text.split("\n"));
  });

  return (
    <div className="App">
      <Grid container padding={2} spacing = {5}>
        <Grid item sm={12} md={12} lg={12}>
          <Header title="Title of Article!"/>
        </Grid>
        
        <Grid item sm={5} md={5} lg={5}>
          <Grid container spacing = {2}>
            {parsed.map((paragraph) => (

              paragraph.includes(".") ?

              <Grid item sm={12} md={12} lg={12}>
                <TextDisplay 
                  text={paragraph}
                />
              </Grid>

              :

              <Grid item sm={12} md={12} lg={12}>
                <Header title={paragraph} />
              </Grid>

            )
            )}

          </Grid>
        </Grid>
        <Grid item sm={4} md={4} lg={4}>
          <Question title="Question" />
        </Grid>
        <Grid item sm={3} md={3} lg={3}>
          <Header title="Quiz" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
