const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


// connect to mlab database.
// place mydb string & creds.
// username:quangtrandn93  pass:
mongoose.connect("mongodb+srv://quangtrandn93:<pass>@cluster0.ntpafby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connection.once('open',() => {
    console.log('connected to database')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on 4000')
});