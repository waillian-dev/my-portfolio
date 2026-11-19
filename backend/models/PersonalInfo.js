import mongoose from 'mongoose';

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  basedIn: { type: String, required: true, trim: true },
  focus: { type: String, required: true, trim: true },
  coreExpertise: { type: String, required: true, trim: true },
  email: { type: String, trim: true },
  phone: { type: String, trim: true }
}, {
  timestamps: true
});

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
export default PersonalInfo;