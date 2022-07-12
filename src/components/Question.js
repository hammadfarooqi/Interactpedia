import { Card, FormControl, FormLabel, CardHeader, FormControlLabel, CardContent, Radio, RadioGroup, Grid, Button, Spacing} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react"
import { red, green } from "@mui/material/colors";
import Box from '@mui/material/Box';
import { typography } from '@mui/system';



// test 2
function validate(correct, category, setIsCorrect) {
  console.log(category, correct)
  if (correct === category){
    setIsCorrect(1)
    // document.getElementById("answer-choice").style.display = "none";
    // return 
    // <CheckCircleIcon sx={{ color: green[500], fontSize: 200 }}/>
  }
  else{
    setIsCorrect(0)
    // document.getElementById("answer-choice").style.display = "none";
    // return <CancelIcon sx={{ color: red[500], fontSize: 200 }}/>
  }
}


const Question = ({prompt, answers, correct, topic}) => {
  const [category, setCategory] = useState('A')
  const [isCorrect, setIsCorrect] = useState(-1)
  const [show, setShow] = useState(false);
  const [passed, setPassed] = useState(false);
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
              <Grid container={0} align = "center" direction="column" justify="center">
                <Grid item xs={6}>
                  <FormControlLabel value="A" control={<Radio />} label={answers[0]} />
                  <FormControlLabel value="C" control={<Radio />} label={answers[2]} />
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel value="B" control={<Radio />} label={answers[1]} />
                  <FormControlLabel value="D" control={<Radio />} label={answers[3]} />
                </Grid>
              </Grid>
            </RadioGroup>

          </FormControl>
          <Grid xs={12}>
            <Button type="submit" variant="outlined" onClick = {() => validate(correct, category, setIsCorrect)}>
              Submit
            </Button>

          </Grid>
        </CardContent>
      </Card>
      <Card>
        <Grid xs={12}>
          {isCorrect === 1 && <CheckCircleIcon sx={{ color: green[500], fontSize: 200}} />}
          {isCorrect === 0 && <CancelIcon sx={{ color: red[500], fontSize: 200 }}/>}
        </Grid>
        <Button variant="text" onClick =  {() => setShow(prev => !prev)}>Hint</Button>
        {show && <Box sx={{margin:2}} id='hint'>Section to Read: {topic}</Box>}
        <Grid xs={12}>
          {isCorrect === 1 && <Button variant="contained" onClick={()=> setPassed(true)} sx={{margin: 2}} >Next Question </Button>}
        </Grid>
      </Card>
    </div>
  )
}

export default Question