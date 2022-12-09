const express = require('express');

const route = require('./router/route.js');
const mongoose  = require('mongoose');
const app = express();

app.use(express.json());


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ganeshkr002:M8mJDXmcwFbmg8tV@assigmntproject.x8wgtkt.mongodb.net/blockchain", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
