import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const TextDisplay = ( {text} ) => {
  return (
    <div>
      <Card>
        {/* <CardHeader 
          title = {title}
        /> */}
        <CardContent>
          <Typography align='justify' paragraph={true}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TextDisplay