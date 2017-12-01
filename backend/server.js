var express = require('express');
var app =  express();
var bodyParser = require('body-parser');

var messages = [{text:'Hello soaltee', owner:'Raj'}, {text:'k chha halkhabar', owner: 'Saroj'}];

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requsted-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req, res)=>{
    res.json(messages);
})
api.post('/message', (req, res)=>{
   console.log(req.body);
   messages.push(req.body);
    //    res.sendStatus(200);
    res.json(req.body);
})
app.use('/api', api);




app.listen(1234);