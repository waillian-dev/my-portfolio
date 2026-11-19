import { motion } from 'framer-motion';

export default function Resume() {
  const experienceData = [
    {
      id: 1,
      period: "2026 - Present",
      role: "App Development Coordinator & QA Tester",
      company: "LOYAR Myanmar Platform",
      desc: "Managing technical architecture, system debugging, and product features workflow. Authored comprehensive PRDs for Passenger Loyalty Programs, Welcome Bonuses, and Referral structures."
    },
    {
      id: 2,
      period: "2026 (April)",
      role: "ERP Software Quality Assurance Evaluator",
      company: "Green IT Co., Ltd.",
      desc: "Focused heavily on Odoo ERP ecosystem evaluation. Formulated structured module test scenarios and business logic verification matrices to maximize enterprise resource software stability."
    },
    {
      id: 3,
      period: "2025 - 2026",
      role: "E-Commerce Infrastructure Developer",
      company: "Shopify & Odoo Matrix Setup",
      desc: "Engineered robust sales architectures connecting Shopify, Cloudflare, and Zendrop for dropshipping operations. Configured databases across MongoDB Atlas and Supabase."
    }
  ];

  const eduAndCertData = [
    {
      id: 1,
      type: "Education",
      title: "Bachelor of Computer Science",
      institution: "Software Engineering Specialization Track",
      desc: "Deep focus on full-stack web/mobile application structures, software design patterns, metrics validation, and systematic data logic."
    },
    {
      id: 2,
      type: "Certification",
      title: "Advanced Software QA & UAT Specialist",
      institution: "Enterprise Verification Credentials",
      desc: "Certified in writing thorough test cases, boundary value analysis, integration mapping, and automated business system evaluations."
    },
    {
      id: 3,
      type: "Certification",
      title: "Full-Stack Agile Product Management",
      institution: "Agile Framework Certification",
      desc: "Validating expertise in crafting high-conversion Product Requirement Documents (PRDs), user flow charting, and milestone sprint execution."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 24 }
    }
  };

  return (
    <section 
      id="resume" 
      className="py-24 max-w-5xl mx-auto px-6 border-b border-slate-100 select-none overflow-hidden text-left"
    >
      {/* SECTION HEADER */}
      <div className="mb-20 space-y-3">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FD8439] bg-[#FD8439]/5 px-3 py-1 rounded-full w-fit">
          ✦ Professional History
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Experience & Qualifications
        </h2>
      </div>

      {/* ====================================================
          BI-COLUMN BORDERLESS TYPOGRAPHY GRID
         ==================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* 💼 LEFT COLUMN: WORK EXPERIENCE (Timeline Style) */}
        <div className="space-y-10">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">// Professional Experience</h3>
          
          <motion.div 
            className="relative border-l border-slate-200/60 ml-2 pl-8 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experienceData.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative group">
                {/* Timeline Anchor Node */}
                <span className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#FD8439] group-hover:scale-125 transition-all duration-300" />
                
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FD8439]">
                    {exp.period}
                  </span>
                  <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#FD8439] transition-colors">
                    {exp.role}
                  </h4>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {exp.company}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium pt-1">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 🎓 RIGHT COLUMN: EDUCATION & CERTIFICATES (Accent Bar Block Style) */}
        <div className="space-y-10">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">// Edu & Certifications</h3>
          
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {eduAndCertData.map((cert) => (
              <motion.div 
                key={cert.id} 
                variants={itemVariants}
                className="border-l-2 border-slate-100 hover:border-[#FD8439] pl-6 transition-colors duration-300 space-y-2"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  {cert.type}
                </span>
                <h4 className="text-base font-black text-slate-900 tracking-tight pt-1">
                  {cert.title}
                </h4>
                <h5 className="text-xs font-bold text-[#FD8439] uppercase tracking-wider">
                  {cert.institution}
                </h5>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium pt-1">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}