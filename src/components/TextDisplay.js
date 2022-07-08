import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const TextDisplay = ( {title} ) => {
  return (
    <div>
      <Card>
        <CardHeader 
          title = {title}
        />
        <CardContent>
          <Typography align='justify' paragraph={true}>
            The term “crowdsourcing” was coined in 2006 by Jeff Howe, who defined crowdsourcing as an act of a company or an institution in reaching out to Internet users and telling them to take a function once performed by their employees in the form of an open call [1]. 
          </Typography>
          <Typography align='justify'>
            In recent years, crowdsourcing has become very popular in the field of education. Websites such as Wikipedia, Quora, and Youtube are excellent examples of websites which utilize their platform to compile an extensive amount of data accumulated from online users of varying identities. These crowdsourced websites, as a result, provide phenomenal information for students to follow along with materials given by teachers to them. Furthermore, crowdsourcing involves activities which are currently availed in many fields along with providing a personalized experience for learners [2]. Due to the benefits that these platforms provide, “teaching and learning has significantly evolved over the past decade” in unimaginable ways through the means of gathering masses of information and insight from the crowd [3].
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TextDisplay