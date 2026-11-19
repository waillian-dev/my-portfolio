import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: [String], // Array of strings, e.g., ['React', 'Node.js', 'MongoDB']
    required: true
  },
  imageUrl: {
    type: String,
    required: true // Project ရဲ့ screenshot link
  },
  githubLink: {
    type: String,
    trim: true
  },
  liveLink: {
    type: String,
    trim: true
  }
}, {
  timestamps: true 
});

const Project = mongoose.model('Project', projectSchema);
export default Project;