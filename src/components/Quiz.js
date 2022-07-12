import Question from "./Question"
import Header from "./Header"
import {Grid} from "@mui/material"
import { useState } from "react"

function nextQs(qs,questions, Passed) {
  for (let i = 0; Passed==true; i++) {
    console.log(questions[i])
    qs.push(<Question prompt={questions[i].prompt} answers={questions[i].answers} correct={questions[i].correct} topic={questions[i].topic}/>)
    return(
      <Question prompt={questions[i].prompt} answers={questions[i].answers} correct={questions[i].correct} topic={questions[i].topic}/>
    )
  }
}

const Quiz = ({questions}) => {
    const [question, setQuestion] = useState(0)

    return (
    <Grid container spacing = {2}>
        <Grid item sm={12} md={12} lg={12}>
            <Header title="Super Fun Quiz!" />
        </Grid>
        <Grid item sm={12} md={12} lg={12}>
            <Question prompt={questions[0].prompt} answers={questions[0].answers} correct={questions[0].correct} topic={questions[0].topic}/>
        </Grid>
    </Grid>
  )
}

export default Quiz