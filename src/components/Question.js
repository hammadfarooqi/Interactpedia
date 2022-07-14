import { Card, FormControl, FormLabel, CardHeader, FormControlLabel, CardContent, Radio, RadioGroup, Grid, Button} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react"
import { red, green } from "@mui/material/colors";
import Box from '@mui/material/Box';
import win from '../Audio/win.mp3';
import lose from '../Audio/lose.mp3';

function validate(correctAnswer, category, setIsCorrect, topic, topics, setTopics) {
  if (correctAnswer === category){
    setIsCorrect(1)
    setTopics(topics.map((choice) => topic === choice.topic ? {...choice, answered: choice.answered+1, correct: choice.correct+1} : choice))
  }
  else{
    setIsCorrect(0)
    setTopics(topics.map((choice) => topic === choice.topic ? {...choice, answered: choice.answered+1} : choice))
  }
}


const Question = ({prompt, answers, correct, topic, topics, setTopics, nextQuestion, questions, current, setCurrent}) => {
  const [category, setCategory] = useState('A')
  const [isCorrect, setIsCorrect] = useState(-1)
  const [showHint, setShowHint] = useState(false);
  return (

    <div>
      <Card>
        <CardHeader 
          title = {prompt}
        />
        <CardContent>
          <FormControl >
            <FormLabel id="answer-choice">Answer Options</FormLabel>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="A"
              name="radio-buttons-group"
              value = {category}
              onChange = {(e)=>setCategory(e.target.value)}>
              {/* <Grid container={0} align = "center" direction="column" justify="center"> */}
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                      <FormControlLabel value="A" control={<Radio />} label={answers[0]} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                      <FormControlLabel value="B" control={<Radio />} label={answers[1]} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                      <FormControlLabel value="C" control={<Radio />} label={answers[2]} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                      <FormControlLabel value="D" control={<Radio />} label={answers[3]} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>

          <Grid xs={12}>
            {isCorrect === -1 && <Button type="submit" variant="outlined" style={{margin:15}} onClick = {() => validate(correct, category, setIsCorrect, topic, topics, setTopics)}>
              Submit
            </Button>}

          </Grid>
        </CardContent>
      </Card>
      <Card>
        {isCorrect === -1 && <Button variant="text" onClick =  {() => setShowHint(prev => !prev)}>Hint</Button>}
        {showHint && <Box sx={{margin:2}} id='hint'>Section to Read: {topic}</Box>}
        <Grid xs={12}>
          {isCorrect === 1 && <CheckCircleIcon sx={{ color: green[500], fontSize: 100}} />}
          {isCorrect === 1 && <audio  autoplay="true"><source src={win} type="audio/mpeg"/></audio>}
          {isCorrect === 0 && <CancelIcon sx={{ color: red[500], fontSize: 100 }}/>}
          {isCorrect === 0 && <audio  autoplay="true"><source src={lose} type="audio/mpeg"/></audio>}
        </Grid>
        {isCorrect === 0 && 
          <CardContent sx={{color:red[500]}}> <b >
            The correct answer is {correct}
            </b>
          </CardContent>
        }
        <Grid xs={12}>
          {isCorrect !== -1 && <Button variant="contained" onClick={()=> nextQuestion(questions, current, setCurrent, topics, setIsCorrect, setShowHint)} sx={{margin: 2}} >Next Question </Button>}
        </Grid>
      </Card>
    </div>
  )
}

export default Question