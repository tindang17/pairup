const express = require ("express");
const bodyParser = require ("body-parser");
const http = require ("http");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// set view engine to ejs
app.set('view engine', 'ejs');

const participants = [];
const sortedParticipants = [];
app.get('/', (req, res) => {
  const templateVars = {
    participants,
    sortedParticipants
  };
  res.render('index', templateVars);
});

function addParticipant (participant, res) {
  participants.push(participant);
  res.status(302).redirect("/");
}
// app.get('/sort', (req, res) => {
//   const templateVars = {
//     sortedParticipants
//   }
//   res.render('pairs', templateVars);
// })
app.post('/sort', (req, res) => {
  randomlySort(participants, res);
})
function randomlySort (participants, res) {
  const index = generateRandomNumber(participants.length);
  if (participants.length === 0) {
    res.send('no more participants');
  } else {
    sortedParticipants.push(participants.splice(index, 1));
    res.redirect('/');
  }
}

function generateRandomNumber (arrayLength) {
  let number = Math.floor(Math.random() * arrayLength);
  return number;
}
app.post('/name', (req, res) => {
  const { participant } = req.body;
  if (participant === '') {
    res.send("field cannot be blanked");
  } else if (participants.includes(participant)) {
    res.send("participant has been added");
  } else {
    addParticipant(participant, res); 
  }
})
http.createServer(app).listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
