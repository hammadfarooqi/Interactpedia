import { Card, FormControl, FormLabel, CardHeader, FormControlLabel, CardContent, Radio, RadioGroup, Grid, Button, Icon} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react"
import { red, green } from "@mui/material/colors";



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
                  <FormControlLabel value="A" control={<Radio />} label="A" />
                  <FormControlLabel value="C" control={<Radio />} label="C" />
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel value="B" control={<Radio />} label="B" />
                  <FormControlLabel value="D" control={<Radio />} label="D" />
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
      {isCorrect === 1 && <CheckCircleIcon sx={{ color: green[500], fontSize: 200 }}/>}
      {isCorrect === 0 && <CancelIcon sx={{ color: red[500], fontSize: 200 }}/>}
    </div>
  )
}

export default Question