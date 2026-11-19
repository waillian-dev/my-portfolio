import express from 'express';
import Social from '../models/Social.js';

const router = express.Router();

// Get all social links
router.get('/', async (req, res) => {
  try {
    const socials = await Social.find();
    res.status(200).json({ success: true, data: socials });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add a new social link
router.post('/', async (req, res) => {
  try {
    const { platform, url, icon } = req.body;
    const newSocial = new Social({ platform, url, icon });
    await newSocial.save();
    res.status(201).json({ success: true, message: 'Social link added!', data: newSocial });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete a social link
router.delete('/:id', async (req, res) => {
  try {
    await Social.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Social link deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;