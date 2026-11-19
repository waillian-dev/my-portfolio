import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  period: {
    type: String,
    required: true, 
    trim: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;