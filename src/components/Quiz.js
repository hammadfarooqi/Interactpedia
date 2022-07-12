import Question from "./Question"
import Header from "./Header"
import {Grid} from "@mui/material"

const Quiz = ({questions}) => {
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