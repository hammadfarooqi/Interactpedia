# Interactpedia

_Interactpedia_ is a frontend web application that models how engagement features can be incorporated into crowdsourcing platforms to improve info retention for users without compromising the contributor experience.

To check a currently deployed version of Interactpedia, please visit [www.interactpedia.com](https://www.interactpedia.com/).

**Note:** It is recommended you run Interactpedia on desktop or tablet display sizes. Running on mobile display sizes may contain formatting issues.

## Table of Contents
- [Features](https://github.com/hammadfarooqi/Interactpedia/#features)
- [Technologies](https://github.com/hammadfarooqi/Interactpedia/#technologies)
- [Setup](https://github.com/hammadfarooqi/Interactpedia/#setup)
- [Authors](https://github.com/hammadfarooqi/Interactpedia/#authors)

## Features

- **Text Display:** A scrollable display for the article content that is parsed and autoseparated into sections is displayed on the left.
- **Quiz Display:** One multiple choice question chosen from the article's question bank is displayed on the right, and after the user answers, they are provided instant audio and visual feedback and a new question.
- **Formative Assessment:** As the user progresses through the multiple choice questions, Interactpedia uses its built-in algorithm to choose questions for the user about topics they struggle with.
- **Cognitive Scaffolding Hints:** If the reader are stuck on one question, they can click the hint button that points them to where they can find the answer.

## Technologies
 - Javascript <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript" width="30px">
 - React.js <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js" width="30px">
 - Material UI <img src="https://v4.mui.com/static/logo.png" alt="MUI" height="30px">

## Setup
In order to run a local instance of Interactpedia, first clone or download a copy of this repository and follow the instructions below.

To setup the dependencies for the application, run:
```
npm install
```
which should download a set of `node_modules` for the backend server.

### Running
To start the application, run:
```
npm start
```
The frontend will be available on http://localhost:3000, which should appear in your browser automatically and reload upon any changes.

## Authors
_Interactpedia_ was made as a research model for _Modeling the Effects of Engagement Methods in Online Crowdsourcing Platforms_ by Rajoshi Basu, Bryan Braga, Hammad Farooqi, & Yechan Lee with mentorship from Dr. Aaron Mazzeo at the Rutgers University Governor’s School of New Jersey Program in Engineering & Technology. 

**Made by**: Hammad Farooqi & Yechan Lee.