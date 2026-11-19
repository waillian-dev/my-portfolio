import express from 'express';
import Experience from '../models/Experience.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: experiences });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add a new experience
router.post('/', async (req, res) => {
  try {
    const { role, company, period, description } = req.body;
    if (!role || !company || !period || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const newExperience = new Experience({ role, company, period, description });
    await newExperience.save();
    res.status(201).json({ success: true, message: 'Experience added!', data: newExperience });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete an experience
router.delete('/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Experience deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;