import express from 'express';
import Education from '../models/Education.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newEdu = new Education(req.body);
    await newEdu.save();
    res.status(201).json({ success: true, message: 'Education added!', data: newEdu });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Education deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;