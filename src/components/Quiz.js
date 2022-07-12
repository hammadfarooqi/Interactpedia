import Question from "./Question"
import Header from "./Header"
import {Grid} from "@mui/material"
import { useState } from "react"

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