const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require("../configs");
const port = config.server.port;
const apiRouter = require('../routes');
const schema = require('../apollo/schemas');
const resolvers = require('../apollo/resolvers');
var cors = require('cors');

const { ApolloServer, gql } = require('apollo-server-express');

app.use(cors());


const graphQlServer = new ApolloServer({
  typeDefs : schema,
  resolvers
})

graphQlServer.applyMiddleware({ app, cors: false, path: "/graphql" });

app.use(bodyParser.json());

app.use('/api/eshop', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};
