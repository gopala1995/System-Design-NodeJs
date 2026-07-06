import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const replicaApp_Name = process.env.APP_NAME

const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(`Server is running on Docker port ${PORT} - App: ${replicaApp_Name}`);
})


app.listen(PORT,() =>{
    console.log(`Server is running on Docker port ${PORT} - App: ${replicaApp_Name}`);
})