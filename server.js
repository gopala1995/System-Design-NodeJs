import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import redis from "./config/redis.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const replicaApp_Name = process.env.APP_NAME

const app = express();

redis.set("mykey", "MyValue From NodeJs");

// ioredis supports the node.js callback style
redis.get("mykey", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Prints "value"
  }
});

// Or ioredis returns a promise if the last argument isn't a function
redis.get("mykey").then((result) => {
  console.log(result); // Prints "value"
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(`Server is running on Docker port ${PORT} - App: ${replicaApp_Name}`);
})


app.listen(PORT,() =>{
    console.log(`Server is running on Docker port ${PORT} - App: ${replicaApp_Name}`);
})