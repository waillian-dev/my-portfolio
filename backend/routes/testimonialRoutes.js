import express from 'express';
import Testimonial from '../models/Testimonial.js'; 

const router = express.Router();

// 📥 GET ALL TESTIMONIALS
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error: error.message });
  }
});

// 📤 POST A NEW TESTIMONIAL
router.post('/', async (req, res) => {
  const { name, role, company, quote, avatar } = req.body;

  try {
    const newTestimonial = new Testimonial({
      name,
      role,
      company,
      quote,
      avatar
    });

    const savedTestimonial = await newTestimonial.save();
    res.status(201).json({ message: "Testimonial saved successfully!", data: savedTestimonial });
  } catch (error) {
    res.status(400).json({ message: "Failed to save testimonial", error: error.message });
  }
});

// 🎯 ဤနေရာတွင် export default အဖြစ် ပြောင်းလဲပေးလိုက်ပါ (ဒါမှ server.js က တိုက်ရိုက်ဖတ်နိုင်မှာပါ)
export default router;