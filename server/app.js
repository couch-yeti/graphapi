const express = require('express');
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const db_config = require('./db_config');
const app = express();

mongoose.connect(db_config,
	{useNewUrlParser: true})
mongoose.connection.once('open', () => {
	console.log('connected to db')
})

app.use('/graphql', grapqlHTTP({
	schema,
	graphiql: true

}));


app.listen(7000, () => {
	console.log('now listening for requests on port 7000')
})