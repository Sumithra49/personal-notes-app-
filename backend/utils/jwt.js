const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const NOTES_FILE = path.join(__dirname, "../data/notes.json");

// GET all user notes
router.get("/", (req, res) => {
  const notes = JSON.parse(fs.readFileSync(NOTES_FILE, "utf-8"));
  const userNotes = notes.filter((note) => note.userId === req.user.id);
  res.json(userNotes);
});

// POST new note
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const notes = JSON.parse(fs.readFileSync(NOTES_FILE, "utf-8"));

  const newNote = {
    id: uuidv4(),
    title,
    content,
    userId: req.user.id,
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
  res.status(201).json(newNote);
});

// DELETE note
router.delete("/:id", (req, res) => {
  let notes = JSON.parse(fs.readFileSync(NOTES_FILE, "utf-8"));
  const note = notes.find(
    (n) => n.id === req.params.id && n.userId === req.user.id
  );
  if (!note) return res.status(403).json({ message: "Not allowed" });

  notes = notes.filter((n) => n.id !== req.params.id);
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
  res.json({ message: "Note deleted" });
});

module.exports = router;
