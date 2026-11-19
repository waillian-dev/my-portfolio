import express from 'express';
import Certification from '../models/Certification.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: certifications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCert = new Certification(req.body);
    await newCert.save();
    res.status(201).json({ success: true, message: 'Certification added!', data: newCert });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Certification deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;