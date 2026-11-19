import { motion } from 'framer-motion';

export default function About() {
  // 💡 မင်းအလိုရှိတဲ့ name, image, categories ပုံစံအတိုင်း Frontend မှာ Static Mock Data တည်ဆောက်ထားခြင်း
  const skills = [
    { id: 1, name: "React", image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png", categories: "frontend" },
    { id: 2, name: "Laravel", image: null, categories: "backend" },
    { id: 3, name: "TypeScript", image: null, categories: "frontend" },
    { id: 4, name: "React Native", image: null, categories: "mobile" },
    { id: 5, name: "Node.js", image: null, categories: "backend" },
    { id: 6, name: "MySQL", image: null, categories: "database" },
    { id: 7, name: "Docker", image: null, categories: "devops" },
    { id: 8, name: "Odoo ERP", image: null, categories: "QA / Testing" }
  ];

  const softSkills = [
    { name: "Problem Solving & Logic", percentage: 95 },
    { name: "Cross-functional Coordination", percentage: 90 },
    { name: "UAT & Quality Analysis", percentage: 92 },
    { name: "Agile Project Management", percentage: 88 }
  ];

  // Infinite Loop အဆက်မပြတ်ပြေးနေစေရန် Array အား နှစ်ခါတွဲ (Clone) ထားခြင်း
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section 
      id="about" 
      className="py-24 max-w-5xl mx-auto px-6 select-none overflow-hidden text-left"
    >
      {/* UPPER INFO BLOCKS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
        {/* LEFT COLUMN: BIOGRAPHY */}
        <div className="md:col-span-6 space-y-5">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FD8439] bg-[#FD8439]/5 px-3 py-1 rounded-full w-fit">
            ✦ About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Bridging Product Logic <br />With Quality Execution
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
            As an experienced App Development Coordinator and Software Quality Assurance Tester, I operate at the intersection of business strategy and technical development. My core focus is ensuring digital products are built with bulletproof logic, smooth architectures, and flawless end-user experiences.
          </p>
        </div>

        {/* RIGHT COLUMN: CORE SUMMARY NOTE */}
        <div className="md:col-span-6 space-y-5 p-6 bg-slate-50/60 border border-slate-100 rounded-[24px]">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FD8439] mb-1">
              // Core Capabilities
            </h3>
            <h4 className="text-lg font-black text-slate-900 tracking-tight">Soft Skills Matrix</h4>
          </div>

          <div className="space-y-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-1.5">
                {/* Title & Percentage Header */}
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 tracking-tight">
                  <span>{skill.name}</span>
                  <span className="text-[#FD8439]">{skill.percentage}%</span>
                </div>

                {/* Outer Progress Track Bar */}
                <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                  {/* Inner Animated Progress Fill */}
                  <motion.div
                    className="h-full bg-[#FD8439] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================================================
          ⚠️ INFINITE RUNNING MOTION SKILLS MARQUEE (အဆက်မပြတ် ပြေးနေမည့်အပိုင်း)
         ==================================================== */}
      <div className="mt-12 space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">
          Skills Sets
        </h3>

        {/* Outer Slider Window */}
        <div className="relative w-full overflow-hidden bg-slate-50/50 py-6 border-y border-slate-100/80 flex mask-gradient">
          
          <motion.div 
            className="flex space-x-6 shrink-0"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={`${skill.id}-${index}`}
                className="flex items-center space-x-3 px-6 py-3.5 rounded-2xl shadow-3xs"
              >
                {/* Image ရှိရင်ပြမယ် မရှိရင် (null ဆိုရင်) Categories အလိုက် Icon အစားထိုးပြမယ် */}
                {skill.image ? (
                  <img src={skill.image} alt={skill.name} className="w-5 h-5 object-contain" />
                ) : (
                  <span className="text-[#FD8439] font-bold text-xs">✦</span>
                )}
                
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-slate-800 tracking-tight">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}