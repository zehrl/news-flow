const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrls = require('./backend/routes/routes');
const cors = require('cors');
const path = require("path");
const passport = require("passport");


const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();


app.use(express.json())
app.use(cors())
app.use("/api", require("./backend/routes/authentication"));
// app.use(routeUrls);

app.use(passport.initialize());
// Passport config
passport.use(
  require("./backend/config/jwtPassportStrategy")
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function (error) {
  if (error) { throw error } else { console.log(`🌎 ==> API server now on port ${PORT}!`) };
});

mongoose.connect(process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: false
  }, () => {
    console.log("Database connected")
  })

