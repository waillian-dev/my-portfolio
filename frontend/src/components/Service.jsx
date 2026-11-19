import { motion } from 'framer-motion';

export default function Services() {
  // 1. Core Premium Services Dataset mapped to your professional background
  const servicesData = [
    {
      id: "01",
      title: "Product Requirement Documentation (PRD)",
      desc: "Structuring bulletproof product logics, milestones setup, and sequential reward workflows. Delivering highly detailed flowcharts, use cases, and comprehensive specifications for complex apps.",
      tags: ["Logic Architecture", "User Flow Mapping", "Agile Sprints"]
    },
    {
      id: "02",
      title: "End-to-End Quality Assurance (QA) & UAT",
      desc: "Formulating meticulous business logic verification matrices and structured integration test scenarios. Specializing in manual functional testing for ERP modules (Odoo) and full-stack applications.",
      tags: ["Functional Testing", "Boundary Analysis", "Jira & ClickUp"]
    },
    {
      id: "03",
      title: "Full-Stack Application Orchestration",
      desc: "Coordinating technical setups, advanced features troubleshooting, and multi-platform cloud database linking to keep web and mobile development cycles optimized and fully aligned.",
      tags: ["Laravel API", "React Native", "TypeScript / Node"]
    },
    {
      id: "04",
      title: "E-Commerce Infrastructure Matrix",
      desc: "Engineering automated enterprise dropshipping pathways and inventory management synchronization. Connecting cross-border marketplaces, shopify systems, and CDN networks safely.",
      tags: ["Shopify & Odoo Matrix", "Cloudflare CDN", "Database Syncing"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 24 }
    }
  };

  return (
    <section id="services" className="py-24 w-full bg-white select-none overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ====================================================
            PART 1: PREMIUM COMPACT HEADER
           ==================================================== */}
        <div className="mb-20 space-y-3 border-b border-slate-100 pb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FD8439] bg-[#FD8439]/5 px-3 py-1 rounded-full w-fit">
            ✦ Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Strategic Professional Services
          </h2>
        </div>

        {/* ====================================================
            PART 2: BORDERLESS ROW-BASED INTERACTIVE GRID
           ==================================================== */}
        <motion.div 
          className="divide-y divide-slate-100 border-b border-slate-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={rowVariants}
              className="py-10 first:pt-0 last:pb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group relative transition-all duration-300 pl-4 sm:pl-6 rounded-3xl hover:bg-slate-50/70"
            >
              {/* 💡 Left Element (2 Cols): Premium Index Numbering */}
              <div className="md:col-span-2 flex items-center space-x-3 md:space-x-0">
                <span className="text-xs font-serif font-black text-slate-300 group-hover:text-[#FD8439] transition-colors duration-300">
                  // {service.id}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD8439] md:hidden" />
              </div>

              {/* 💡 Middle Element (6 Cols): Title & Core Descriptions */}
              <div className="md:col-span-6 space-y-3">
                <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#FD8439] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed pr-4">
                  {service.desc}
                </p>
              </div>

              {/* 💡 Right Element (4 Cols): Meta Tags Stack */}
              <div className="md:col-span-4 flex flex-wrap gap-1.5 pt-2 md:pt-1 justify-start md:justify-end pr-4">
                {service.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full group-hover:bg-white group-hover:border-slate-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}