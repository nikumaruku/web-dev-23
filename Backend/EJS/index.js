import express from 'express';

const app = express();
const port = 3001;

const date = new Date();
let day = date.getDay();

let type = "Its weekday";
let advice = "Work hard!";

if (day === 0 || day === 6) {
  type = "Its weekend";
  day = "Rest well!"
}

app.get("/", (req,res) => {
  res.render("index.ejs", {
    dayType: type,
    advice : advice
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})