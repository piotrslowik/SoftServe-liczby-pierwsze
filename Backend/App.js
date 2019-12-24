const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const cloudinary = require('cloudinary');

const graphqlSchema = require('./GraphQL/schema');
const graphqlResolvers = require('./GraphQL/resolvers');

const uploadRouter = require('./Routers/upload');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
  
app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

app.use('/upload', uploadRouter);


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uccjg.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(8000);
    })
    .catch(error => {
        console.error(error);
    })

cloudinary.config({ 
  cloud_name: 'auto-moto-luxury', 
  api_key: '419514689614423', 
  api_secret: 'zt6W8gQTeehhJVUD42gSCLqIyEc' 
});
