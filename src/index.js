const express = require('express');
const {json} = require('express');
const connect = require('./config/database')
const userRoute = require('./router/userRoutes')

connect()

const app = express(); 
app.use(json());
app.use('/todo', userRoute);


const port = process.env.PORT || 9000; 

app.get('/', function(req, res){
    res.send('MongoDB Training Zuri');
})

app.listen(port, function(){
    console.log(`Serving and Listening on port ${port}`);
}); 