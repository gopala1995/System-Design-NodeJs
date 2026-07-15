import express from 'express';
import fs from 'fs';
 

const courseRouter  = express.Router();


courseRouter.get("/all-courses", (req,res) => {

    try {
        const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

        res.status(200).json({
            success: true,
            message: "All Courses",
            courses: data
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error reading courses",
            error: err.message
        });
    }
})

export default courseRouter;

 