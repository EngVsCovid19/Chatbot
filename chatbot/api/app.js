const express = require('express');
const coronaRouter = require('./api/routes/corona');
const app = express();

app.use('/corona',coronaRouter);
app.use('/', (req,res,next) => res.status(200).send("<html><h1>CORONA API</h1><p>exemple:<a href=\" https://engvscovid19.herokuapp.com/corona\">  https://engvscovid19.herokuapp.com/corona </a> </p><P> You can specify the country:<a href=\" https://engvscovid19.herokuapp.com/corona/morocco\">  https://engvscovid19.herokuapp.com/corona/morocoo </a> </P> <p>Made by:<a href=\"https://github.com/DadiAnas\"> Dadi Anas  </a> </p></html>"
));

module.exports = app;