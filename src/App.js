import './App.css'
import {useState } from "react"
import {Grid} from "@mui/material"
import TextDisplay from "./components/TextDisplay"
import Quiz from "./components/Quiz"
import Header from "./components/Header"
import raw from "./article.txt"
import {qs} from "./questions.js"

function App() {

  const [title, setTitle] = useState("")
  const [parsed, setParsed] = useState([])

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setTitle(text.split("\n")[0])
    setParsed(text.split("\n").splice(1));
  });


  return (
    <div className="App">
      <Grid container padding={2} spacing = {5}>
        <Grid item sm={12} md={12} lg={12}>
          <Header title={title}/>
        </Grid>
        
        <Grid item sm={8} md={8} lg={8}>
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
          <Quiz questions={qs}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
