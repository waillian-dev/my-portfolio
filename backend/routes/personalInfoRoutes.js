import express from 'express';
import PersonalInfo from '../models/PersonalInfo.js';

const router = express.Router();

// Get personal info
router.get('/', async (req, res) => {
  try {
    const info = await PersonalInfo.findOne(); 
    res.status(200).json({ success: true, data: info });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add or Update personal info
router.post('/', async (req, res) => {
  try {
    const { name, basedIn, focus, coreExpertise, email, phone } = req.body;
    
    let info = await PersonalInfo.findOne();
    if (info) {
      info = await PersonalInfo.findByIdAndUpdate(info._id, req.body, { new: true });
    } else {
      info = new PersonalInfo(req.body);
      await info.save();
    }
    res.status(200).json({ success: true, message: 'Personal Information Saved!', data: info });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;