import { Card, FormControl, FormLabel, CardHeader, FormControlLabel, CardContent, Radio, RadioGroup, Grid, Button } from "@mui/material"
import { useState } from "react"

// test 2


const Question = ({title}) => {
  const [category, setCategory] = useState('A')
  return (
    <div>
      <Card>
        <CardHeader 
          title = {title}
        />
        <CardContent>
          <FormControl onSubmit="">
            <FormLabel id="demo-radio-buttons-group-label">Answer Options</FormLabel>

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
            <Button type="submit" variant="outlined" onClick = {() => console.log(category)}>
              Submit
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Question