import { useState } from 'react';
// import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 💡 ဤနေရာတွင် မင်းရဲ့ Backend API သို့မဟုတ် Email Service သို့ လှမ်းပို့နိုင်သည်
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 w-full bg-white select-none overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ====================================================
            BI-COLUMN PREMIUM INTERACTIVE CONTACT GRID
           ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* 📬 LEFT COLUMN (5 COLS): CAPABILITIES & TEXT INFO */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#FD8439] bg-[#FD8439]/5 px-3 py-1 rounded-full w-fit">
                ✦ Connection
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Let's Build <br />Something Great
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium max-w-sm">
                Have an ecosystem strategy to document, an ERP module to test, or a full-stack platform to launch? Drop a message and let's coordinate execution.
              </p>
            </div>

            {/* Direct Connect Details */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">// Direct Email</p>
                <a href="mailto:waillianchit@gmail.com" className="text-sm font-black text-slate-900 hover:text-[#FD8439] transition-colors duration-300">
                  waillianchit@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">// Base Location</p>
                <p className="text-sm font-black text-slate-900">Yangon, Myanmar</p>
              </div>
            </div>
          </div>

          {/* ✉️ RIGHT COLUMN (7 COLS): BORDERLESS MINIMALIST FORM */}
          <div className="md:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50/80 border border-slate-100/80 rounded-2xl px-5 py-3.5 text-xs font-medium text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FD8439] focus:bg-white transition-all duration-300 shadow-3xs"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50/80 border border-slate-100/80 rounded-2xl px-5 py-3.5 text-xs font-medium text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FD8439] focus:bg-white transition-all duration-300 shadow-3xs"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full bg-slate-50/80 border border-slate-100/80 rounded-2xl px-5 py-3.5 text-xs font-medium text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FD8439] focus:bg-white transition-all duration-300 shadow-3xs"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your product scope..."
                  className="w-full bg-slate-50/80 border border-slate-100/80 rounded-2xl px-5 py-3.5 text-xs font-medium text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FD8439] focus:bg-white transition-all duration-300 resize-none shadow-3xs"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-md hover:bg-[#FD8439] transition-all duration-300 transform active:scale-98 disabled:opacity-50 disabled:scale-100 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? "Sending Scope..." : "Send Message ↗"}</span>
                </button>
              </div>

            </form>
          </div>

        </div>
        
      </div>
    </section>
  );
}