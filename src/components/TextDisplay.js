import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const TextDisplay = ( {title} ) => {
  return (
    <div>
      <Card>
        <CardHeader 
          title = {title}
        />
        
      </Card>
    </div>
  )
}

export default TextDisplay