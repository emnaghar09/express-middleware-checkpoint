// 1 - import express
const express = require("express");
// 2- intialization of the app
const app = express();
// 3- create a new port 
const port = 4000;
// 4- create middleware
const verifDate = (req, res, next) => {
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    let hours = new Date().getHours();
days[new Date().getDay()] !== "saturday" && days[new Date().getDay()] !== "sunday" && hours>9 && hours<17? 
next()
: res.send('<h1>come back on working hours</h1>')
}

// 5-create the server
app.listen(port, (err) => 
err? console.log(err):console.log(`server is now listening on ${port}`))
// using the middleware
app.use(verifDate)
// 6-routing middleware

app.use(express.static("public"))
