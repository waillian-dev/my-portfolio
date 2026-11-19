import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// 1. GET: Project အားလုံးကို ဆွဲထုတ်ခြင်း
router.get('/', async (req, res) => {
  try {
    // နောက်ဆုံးတင်တဲ့ Project ကို အပေါ်ဆုံးမှာ ပြချင်လို့ sort({ createdAt: -1 }) သုံးထားပါတယ်
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// 2. POST: Project အသစ်တစ်ခု ထည့်သွင်းခြင်း
router.post('/', async (req, res) => {
  try {
    const { title, description, technologies, imageUrl, githubLink, liveLink } = req.body;

    // မရှိမဖြစ်လိုအပ်တဲ့ field တွေ ပါမပါ စစ်မယ်
    if (!title || !description || !technologies || !imageUrl) {
      return res.status(400).json({ message: 'Title, description, technologies, and imageUrl are required.' });
    }

    const newProject = new Project({
      title,
      description,
      technologies, // Frontend ကနေ ['React', 'Node'] စသဖြင့် Array ပုံစံ လာရပါမယ်
      imageUrl,
      githubLink,
      liveLink
    });

    await newProject.save();
    res.status(201).json({ success: true, message: 'Project added successfully!', data: newProject });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// 3. DELETE: Project တစ်ခုကို ID ဖြင့် ပြန်ဖျက်ခြင်း
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.status(200).json({ success: true, message: 'Project deleted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

export default router;