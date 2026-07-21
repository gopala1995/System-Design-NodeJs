import express from "express";
import fs from "fs";

const courseRouter = express.Router();

courseRouter.get("/all-courses", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

    res.status(200).json({
      success: true,
      message: "All Courses",
      courses: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error reading courses",
      error: err.message,
    });
  }
});

courseRouter.get("/course/:id", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const courseIndex = data.findIndex(
      (course) => course.id === parseInt(req.params.id),
    );

    if (courseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    } else {
      course.forEach((el, idx) => {
        if (el.id === courseID) {
          res.status(200).json({
            msg: "Course details",
            course: el,
          });
        }
      });
    }

    res.status(200).json({
      success: true,
      message: "Course details",
      course: data[courseIndex],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error reading course",
      error: err.message,
    });
  }
});

export default courseRouter;
