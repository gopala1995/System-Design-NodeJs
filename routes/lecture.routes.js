import express from "express";

const lectureRouter = express.Router();

lectureRouter.get("/all-lectures", (req, res) => {
  res.status(200).json({
    success: true,
    message: "List of Lectures",
  });
});

lectureRouter.post("/create-lecture", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Lecture created successfully",
  });
});

lectureRouter.put("/update-lecture/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Lecture with ID ${req.params.id} updated successfully`,
  });
});

lectureRouter.delete("/delete-lecture/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Lecture with ID ${req.params.id} deleted successfully`,
  });
});

export default lectureRouter;
