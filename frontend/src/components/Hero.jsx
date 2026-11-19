import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // --- Dynamic Typewriter Effect Logic ---
  const words = [
    "App Development Coordinator",
    "Quality Assurance Tester",
    "Full-Stack Software Engineer"
  ];
  
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIdx];
      
      if (!isDeleting) {
        // Typing state
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80); // Speed when typing
        
        if (currentText === fullWord) {
          // Pause at the end of the word
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting state
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Faster speed when deleting
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  // --- Framer Motion Transition Variants ---
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  return (
    <section 
      id="home" 
      className="pt-36 pb-20 max-w-5xl mx-auto px-6 select-none overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
        
        {/* ====================================================
            LEFT COLUMN (7 COLS): ENGLISH HERO TEXTS & TYPE EFFECT
           ==================================================== */}
        <motion.div 
          className="md:col-span-7 space-y-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          {/* Greeting Badge */}
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full w-fit">
            ✦ Welcome To My Portfolio
          </div>

          {/* Main Headline Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-brand-orange">Waillian</span> <br />
            Chit
          </h1>

          {/* 💻 DYNAMIC TYPEWRITER ROLE SUBTITLE */}
          <div className="h-8 flex items-center">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-700 tracking-tight">
              {currentText}
              <span className="animate-pulse text-brand-orange font-normal ml-0.5">|</span>
            </h2>
          </div>

          {/* Short Bio Description in English */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
            I specialize in structuring comprehensive Product Requirements Documents (PRDs), managing advanced milestone-based reward logic, and delivering meticulous end-to-end full-stack applications with bulletproof quality.
          </p>

          {/* Hero Action Buttons CTAs */}
          <div className="flex items-center space-x-4 pt-2">
            <a 
              href="#project" 
              className="px-6 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md hover:bg-brand-orange transition-all duration-300 transform active:scale-98 cursor-pointer"
            >
              View Portfolio &nbsp;↗
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-slate-50 hover:border-brand-orange hover:text-brand-orange transition-all duration-300 transform active:scale-98"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* ====================================================
            RIGHT COLUMN (5 COLS): EXACT ABOUT SECTION PROFILE
           ==================================================== */}
        <motion.div 
          className="md:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative group w-[240px] h-[240px] sm:w-[270px] sm:h-[270px]">
            <div className="absolute inset-0 border-2 border-brand-orange rounded-3xl translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 z-0" />
            <div className="absolute inset-0 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 z-10 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
                alt="Waillian Chit Profile" 
                className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}