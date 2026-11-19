import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// 📥 1. GET ALL SKILLS
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch skills", error: error.message });
  }
});

// 📤 2. POST A NEW SKILL
router.post('/', async (req, res) => {
  const { name, image, categories } = req.body;

  try {
    const newSkill = new Skill({
      name,
      image: image || null, // client က မပို့ရင် သို့မဟုတ် null ပို့ရင် null အဖြစ်သိမ်းမည်
      categories
    });

    const savedSkill = await newSkill.save();
    res.status(201).json({ message: "Skill saved successfully!", data: savedSkill });
  } catch (error) {
    res.status(400).json({ message: "Failed to save skill", error: error.message });
  }
});

export default router;