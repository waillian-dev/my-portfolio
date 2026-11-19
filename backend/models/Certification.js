import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true }, // ဥပမာ - 'Certified ERP Software Tester'
  issuer: { type: String, required: true, trim: true }, // ဥပမာ - 'Odoo/Green IT Evaluation'
  issueDate: { type: String, required: true, trim: true }, // ဥပမာ - 'April 2026'
  credentialUrl: { type: String, trim: true }
}, {
  timestamps: true
});

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;