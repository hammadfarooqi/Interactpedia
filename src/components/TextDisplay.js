import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';

const TextDisplay = ( {text} ) => {
  return (
    <div  >
      <Card style={{borderRadius:0, background: "#6DAEDB", color:"black"}} >
        {/* <CardHeader 
          title = {title}
        /> */}
        <CardContent>
          <Typography align='justify' paragraph={true}>
            <b>{text}</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TextDisplay