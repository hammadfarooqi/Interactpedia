// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader


const Header = ( { title, isTitle } ) => {
  return (
    <div >
      {isTitle ? <h1  style={{fontSize:50}}>{title}</h1>: <h1>{title}</h1>}
      {/* <Card>
        <CardHeader 
          title = {title}
        />
      </Card> */}
    </div>
  )
}

Header.defaultProps = {
  isTitle: false
}

export default Header