import Question from "./Question"
import Header from "./Header"
import {Grid} from "@mui/material"
import { useState } from "react"

function nextQs(qs,questions, Passed) {
  
}

const Quiz = ({questions, topics, setTopics}) => {
  const [current, setCurrent] = useState(0)

  return (
  <Grid container spacing = {2}>
      <Grid item sm={12} md={12} lg={12}>
          <Header title="Super Fun Quiz!" />
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
          <Question 
            prompt={questions[current].prompt} 
            answers={questions[current].answers} 
            correct={questions[current].correct} 
            topic={questions[current].topic}
            topics={topics}
            setTopics={setTopics}
          />
      </Grid>
  </Grid>
  )
}

export default Quiz