import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  // 1. Core Category Filter Tabs
  const categories = ["All", "Digital Ecosystem", "Full-Stack Application", "E-Commerce System"];
  const [activeTab, setActiveTab] = useState("All");

  // 2. Real-World Premium Portfolio Datasets 
  const projectsData = [
    {
      id: 1,
      title: "LOYAR Myanmar - Loyalty & Tier Ecosystem",
      category: "Ecosystem",
      desc: "Designed full-scale PRDs and flowcharts for high-conversion Welcome Bonus, Driver Matching Algorithms, and Tier-based Retention structures.",
      tech: ["PRD Logic", "User Flow Diagrams", "Jira", "UAT Testing"],
      stats: "Driver Match: 98.4%",
      link: "#"
    },
    {
      id: 2,
      title: "HabiFi - Finance & Habit Tracker",
      category: "Full-Stack Application",
      desc: "A gamified productivity application combining micro-finance accounting with sequential habit tracking architecture.",
      tech: ["React Native", "Laravel API", "TypeScript", "MySQL"],
      stats: "Active Users: 12k+",
      link: "#"
    },
    {
      id: 3,
      title: "Odoo ERP Enterprise Matrix",
      category: "Digital Ecosystem",
      desc: "Conducted intensive end-to-end Quality Assurance testing and integration verification maps for manufacturing and payroll modules.",
      tech: ["Odoo ERP", "Integration Testing", "Boundary Analysis"],
      stats: "Bugs Fixed: 240+",
      link: "#"
    },
    {
      id: 4,
      title: "Global Dropshipping Automation",
      category: "E-Commerce System",
      desc: "Engineered high-scale infrastructure syncing Shopify and Odoo matrices with Zendrop for print-on-demand automated tracking.",
      tech: ["Shopify Matrix", "Cloudflare CDN", "MongoDB Atlas"],
      stats: "ROI Increase: 42%",
      link: "#"
    }
  ];

  // Filter Logic
  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="project" className="py-24 w-full bg-white select-none overflow-hidden text-left">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ====================================================
            PART 1: MINIMAL HEADER & DYNAMIC CATEGORY TABS
           ==================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-8">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FD8439] bg-[#FD8439]/5 px-3 py-1 rounded-full w-fit">
              ✦ Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Selected Architecture Works
            </h2>
          </div>

          {/* DYNAMIC NAV CAPSULE TABS */}
          <div className="flex flex-wrap gap-3">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer overflow-hidden
                ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                <span className="relative z-10">{tab}</span>

                {activeTab !== tab && (
                  <span className="absolute inset-0 bg-slate-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ====================================================
            PART 2: PREMIUM BORDERLESS BOLD TYPOGRAPHY GRID
           ==================================================== */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between group cursor-pointer relative"
              >
                <div className="space-y-4">
                  
                  {/* Visual Premium Frame Container (Figma Concept Mockup Overlay) */}
                  <div className="relative w-full h-[240px] sm:h-[280px] rounded-[32px] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-6 transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                    
                    {/* Background Decorative Tech Grid Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Left Center Orange Identity Label inside the Frame */}
                    <div className="z-10 text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center font-black text-slate-800 text-lg shadow-2xs mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {idx + 1}
                      </div>
                      <span className="inline-block text-[9px] font-black text-[#FD8439] uppercase tracking-widest bg-white px-2.5 py-1 rounded-full border border-slate-100 shadow-3xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Premium Liquid Hover Glass Mask Content Cover Layer */}
                    <div className="absolute inset-0 bg-slate-900/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-slate-900/90 group-hover:backdrop-blur-xs flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100">
                      
                      {/* Top Row Tech Badges inside Hover */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[9px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-md tracking-wider uppercase">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Row Stats View CTA */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Performance Matrix</p>
                          <p className="text-sm font-black text-white">{project.stats}</p>
                        </div>
                        <span className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center font-black text-sm transform transition-transform duration-300 hover:scale-110">
                          ↗
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Project Info Block */}
                  <div className="space-y-1.5 px-2">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#FD8439]">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}