import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const Header = ( { title } ) => {
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

export default Header