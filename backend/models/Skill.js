import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: null
  },
  categories: {
    type: String,
    required: true,
    trim: true // ဥပမာ - "frontend", "backend", "database", "management"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;