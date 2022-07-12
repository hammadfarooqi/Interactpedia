import Question from "./Question"
import Header from "./Header"
import {Grid} from "@mui/material"
import { useState } from "react"

function nextQuestion(questions, current, setCurrent, topics, setIsCorrect) {
  setIsCorrect(-1)

  var choice = 0
  if (choice === current) {
    choice = 1
  }

  var worstTopic = topics[0].topic
  var accuracy = 1

  // Make the target topic topic the one with the worst accuracy
  topics.map((topic) => topic.answered !==0 ? (topic.correct/topic.answered < accuracy ? (accuracy=topic.correct/topic.answered, worstTopic=topic.topic) : null) : null)
  
  // If there is a topic with 3 or more less questions answered, that becomes the target topic
  var maxAnswered = 0
  topics.map((topic) => topic.answered > maxAnswered ? maxAnswered=topic.answered : null) 
  topics.map((topic) => topic.answered < maxAnswered-2 ? worstTopic=topic.topic : null)

  // If there are still topics with 0 questions answered, those topics become the target topic
  topics.map((topic) => topic.answered === 0 ? worstTopic=topic.topic : null)

  // Choosing a random question of the worstTopic
  var choices = []
  questions.map((question) => question.topic === worstTopic ? (question.index !== current ? choices.push(question.index) : null) : null)
  
  console.log(choices)
  if (choices.length>0) {
    choice = choices[Math.floor(Math.random()*choices.length)]
  } else {
    console.log("choices array empty")
  }

  setCurrent(choice)
}

const Quiz = ({questions, topics, setTopics}) => {
  const [current, setCurrent] = useState(0)

  return (
  <Grid container spacing = {2}>
      <Grid item sm={12} md={12} lg={12}>
          <Header title="Super Fun Quiz!" />
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
          <Question 
            prompt={questions[current].prompt} 
            answers={questions[current].answers} 
            correct={questions[current].correct} 
            topic={questions[current].topic}
            topics={topics}
            setTopics={setTopics}
            nextQuestion={nextQuestion}
            questions={questions}
            current={current}
            setCurrent={setCurrent}
          />
      </Grid>
  </Grid>
  )
}

export default Quiz