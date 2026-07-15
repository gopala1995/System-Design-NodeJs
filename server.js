import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import redis from "./config/redis.config.js";
import courseRouter from "./routes/course.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const replicaApp_Name = process.env.APP_NAME

const app = express();

app.use(express.json());

app.use("/courses", courseRouter);

redis.set("mykey", "MyValue From NodeJs");


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