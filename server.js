const express = require ("express");
const bodyParser = require ("body-parser");
const http = require ("http");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// set view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/name', (req, res) => {
  console.log(req.body);
  res.send('works');
})
http.createServer(app).listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
