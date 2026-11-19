import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const baseReviews = [
    {
      id: 0,
      name: "U Thant Zin",
      role: "Operations Director",
      company: "LOYAR Myanmar logistics",
      quote: "ကျွန်တော်တို့ လုပ်ငန်းသုံး Rider & Logistics Ecosystem ရဲ့ Driver Matching နဲ့ Tier Pricing Algorithm တွေရဲ့ ဘဏ္ဍာရေးတွက်ချက်မှု မှန်ကန်မှုကို Waillian က စနစ်တကျ UAT စမ်းသပ်စစ်ဆေးပေးခဲ့ပါတယ်။ စနစ်ရဲ့ တည်ငြိမ်မှုအတွက် စိတ်ချရတဲ့ ပညာရှင်ပါ။",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 1,
      name: "Daw Khin Myat Noe",
      role: "Project Manager",
      company: "Green IT Co., Ltd.",
      quote: "ERP Software Tester အဖြစ် Odoo Modules တွေရဲ့ စီးပွားရေးလုပ်ငန်းဆောင်တာ ယုတ္တိဗေဒ (Business Logic) တွေကို အရည်အသွေးစစ်ဆေးတဲ့နေရာမှာ သူ့ရဲ့ စေ့စပ်သေချာမှုက အထူးချီးကျူးစရာကောင်းပါတယ်။ PRD တည်ဆောက်မှုမှာ အရမ်းတာဝန်ကျေပါတယ်။",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      name: "Jonathan Blake",
      role: "E-Commerce Tech Lead",
      company: "Technolorja Initiative",
      quote: "Shopify, Odoo ရဲ့ Matrix စနစ်တွေနဲ့ Global Marketplaces တွေကို Automation Dropshipping လမ်းကြောင်းပေါ်ရောက်အောင် Infrastructure ပိုင်းမှာ အပြည့်အဝ ပုံဖော်ပေးနိုင်ခဲ့ပါတယ်။ UI ရော Backend မှာပါ အမြင်စူးရှတဲ့ Developer ပါ။",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
    }
  ];

  // Infinite Carousel Buffer Array
  const extendedReviews = [
    baseReviews[baseReviews.length - 1], 
    ...baseReviews,
    baseReviews[0],                      
  ];

  const [virtualIndex, setVirtualIndex] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const activeDotIndex = (virtualIndex - 1 + baseReviews.length) % baseReviews.length;

  // Auto Play Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 💡 ပြင်ဆင်လိုက်သောနေရာ: Animation ပြီးသွားတဲ့အခါ နေရာကို ချက်ချင်း Reset ချပြီး 
  // နောက် Render Cycle ကျမှ Transition ကို အန္တရာယ်ကင်းကင်း ပြန်ဖွင့်ပေးခြင်း
  const handleAnimationComplete = () => {
    if (virtualIndex >= extendedReviews.length - 1) {
      setIsTransitioning(false);
      setVirtualIndex(1);
      
      // setTimeout (0ms) သုံးပြီး React ရဲ့ Cascading Render Warning ကို ကျော်လွှားသည်
      setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
    } else if (virtualIndex <= 0) {
      setIsTransitioning(false);
      setVirtualIndex(baseReviews.length);
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
    }
  };

  return (
    <section id="testimonials" className="py-24 w-full bg-white select-none overflow-hidden text-center border-b border-slate-100">
      
      {/* HEADER */}
      <div className="flex flex-col items-center space-y-2 mb-16 text-center max-w-xl mx-auto px-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full w-fit">
          ✦ Client Reviews
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          What My Clients Say
        </h2>
      </div>

      {/* INFINITE CAROUSEL TRACK VIEWPORT */}
      <div className="relative w-full flex items-center justify-center px-4">
        <div className="w-full max-w-3xl overflow-visible">
          
          <motion.div 
            className="flex gap-6 justify-start"
            animate={{
              x: `calc(-${virtualIndex * 100}% - ${virtualIndex * 1.5}rem)`
            }}
            transition={isTransitioning ? { type: "spring", stiffness: 150, damping: 25 } : { duration: 0 }}
            onAnimationComplete={handleAnimationComplete}
            style={{ width: "100%" }}
          >
            {extendedReviews.map((item, index) => {
              const isActive = index === virtualIndex;
              
              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  animate={{
                    opacity: isActive ? 1 : 0.15,
                    scale: isActive ? 1 : 0.95,
                    filter: isActive ? "blur(0px)" : "blur(1px)"
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full shrink-0 bg-slate-50/70 p-6 sm:p-10 rounded-[32px] border border-slate-200/60 flex flex-col sm:flex-row items-center sm:items-start text-left gap-6 sm:gap-8 cursor-default"
                >
                  {/* Profile Avatar */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-xs bg-slate-100">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>

                  {/* Review Quote Body */}
                  <div className="flex-1 flex flex-col justify-between h-full space-y-5">
                    <div className="relative">
                      <span className="text-brand-orange/30 text-4xl font-serif font-black absolute -left-2 -top-4">“</span>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium pl-4 block">
                        {item.quote}
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="pt-2 border-t border-slate-200/60 pl-4">
                      <h4 className="text-sm font-black text-slate-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                        {item.role} &nbsp;•&nbsp; <span className="text-brand-orange font-bold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </div>

      {/* DYNAMIC INDICATORS */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        {baseReviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setVirtualIndex(idx + 1);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeDotIndex ? "w-6 bg-brand-orange" : "w-2 bg-slate-200 hover:bg-slate-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}