import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import messageRoutes from './routes/messageRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import socialRoutes from './routes/socialRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import personalInfoRoutes from './routes/personalInfoRoutes.js'; 
import educationRoutes from './routes/educationRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import skillRoutes from './routes/skillRoutes.js';

// .env file reader
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(express.json()); 

// Database Connecting
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes Connection
app.use('/api/messages', messageRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/socials', socialRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/personal-info', personalInfoRoutes); // URL: http://localhost:5000/api/personal-info
app.use('/api/education', educationRoutes);         // URL: http://localhost:5000/api/education
app.use('/api/certifications', certificationRoutes);// URL: http://localhost:5000/api/certifications
app.use('/api/testimonials', testimonialRoutes);  // URL: http://localhost:5000/api/testimonials
app.use('/api/skills', skillRoutes); // URL: http://localhost:5000/api/skills

// Test Route
app.get('/', (req, res) => {
  res.send('Portfolio Backend Server is running...');
});

// Server Starting
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});