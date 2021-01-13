import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connect } from "./db/database";
import schema from "./schema";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/graphiql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

connect();

app.listen(PORT, () => {
  console.log(`Server in port: `, PORT);
});
