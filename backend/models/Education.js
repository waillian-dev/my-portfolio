import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true, trim: true }, // ဥပမာ - 'NCC Level 4 Diploma in Computing'
  school: { type: String, required: true, trim: true }, // ဥပမာ - 'Yangon Computing Academy'
  period: { type: String, required: true, trim: true }, // ဥပမာ - '2025 - 2026'
  description: { type: String, trim: true }
}, {
  timestamps: true
});

const Education = mongoose.model('Education', educationSchema);
export default Education;