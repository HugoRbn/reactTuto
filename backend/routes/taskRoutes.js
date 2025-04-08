import express from "express"
import Task from "../models/Task.js"

const router = express.Router();

// Obtenir toutes les tâches
router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter une nouvelle tâche
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Supprimer une tâche
router.delete("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tâche supprimée" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter une nouvelle tâche
router.post("/update/:id", async (req, res) => {
  try {
    await Task.findById(req.params.id).updateOne(req.body);
    res.status(201).json({message: "tâche mise à jour"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
