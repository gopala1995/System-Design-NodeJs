import express from 'express';

const PORT = process.env.PORT || 5500;

const app = express();


app.get("/", (req, res) => {
    res.status(200).json({"running get request from a Docker": "success"});
})


app.listen(PORT,() =>{
    console.log(`Server is running on Docker port ${PORT}`);
})