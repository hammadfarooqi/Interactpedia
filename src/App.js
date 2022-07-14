import './App.css'
import {useState } from "react"
import {Grid} from "@mui/material"
import TextDisplay from "./components/TextDisplay"
import Quiz from "./components/Quiz"
import Header from "./components/Header"
import raw from "./article.txt"
import {qs} from "./questions.js"
import { red, green, blue } from "@mui/material/colors";

function App() {

  const [title, setTitle] = useState("")
  const [parsed, setParsed] = useState([])
  const [topics, setTopics] = useState([
    {
      topic: "Aviation",
      answered: 0,
      correct: 0
    },
    {
      topic: "Automobiles",
      answered: 0,
      correct: 0
    },
    {
      topic: "Internet of things and physical vulnerabilities",
      answered: 0,
      correct: 0
    }
  ])

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setTitle(text.split("\n")[0])
    setParsed(text.split("\n").splice(1));
  });


  return (
    <div className="Background">
      <Grid container padding={1} spacing = {1}>
        <Grid item sm={12} md={12} lg={12}>
          <Header  title={title} isTitle={true}/>
        </Grid>
        
        <Grid item sm={8} md={8} lg={8}>
          <div style={{height:'75vh', overflow:'auto', padding:10, background:'blue'}}>
            <Grid container spacing = {2}>
              {parsed.map((paragraph) => (
                paragraph.includes(".") ?
                <Grid item sm={12} md={12} lg={12}>
                  <TextDisplay 
                    text={paragraph}
                  />
                </Grid> :
                <Grid item sm={12} md={12} lg={12}>
                  <Header title={paragraph} />
                </Grid>
              )
              )}

            </Grid>
          </div>
        </Grid>
        <Grid item sm={4} md={4} lg={4}>
          <Quiz 
            questions={qs} 
            topics={topics}
            setTopics={setTopics}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;