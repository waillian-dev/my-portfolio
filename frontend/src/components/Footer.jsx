export default function Footer() {
  // Navigation links matched perfectly with your app sections
  const navLinks = ["Home", "About", "Resume", "Project", "Contact"];

  return (
    <footer className="w-full bg-white pt-8 select-none">
      {/* 🛠️ max-w-5xl အစား w-full px-4 sm:px-8 md:px-16 ပြောင်းလဲပြီး Screen အပြည့် ယူထားပါသည် */}
      <div className="bg-slate-900 text-slate-100 pt-12 pb-6 px-6 sm:px-10 md:px-14 rounded-t-[24px] w-full border border-slate-800 mx-auto">
        
        {/* ====================================================
            PART 1: CTA HEADER (Let's Connect & Hire Me Button)
           ==================================================== */}
        {/* Padding နဲ့ စာလုံးအရွယ်အစားများကို နည်းနည်းစီ လျှော့ချထားပါသည် */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-slate-800 mb-8 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Let's Connect There
          </h2>
          
          <a 
            href="mailto:waillianchit.dev@gmail.com"
            className="flex items-center bg-brand-orange text-white py-2.5 px-6 gap-2 rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 transform active:scale-95 group text-[10px] font-black uppercase tracking-widest shadow-md shadow-brand-orange/5"
          >
            Hire me
            <div className="w-4 h-4 bg-white/20 rounded-md flex items-center justify-center group-hover:bg-slate-900/10">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* ====================================================
            PART 2: MAIN METADATA COLUMNS
           ==================================================== */}
        {/* Gap များကို ပိုကျဉ်းပေးပြီး စာလုံးများကို text-[11px] သို့မဟုတ် text-xs ခန့်သို့ လျှော့ချထားပါသည် */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start mb-10 text-left">
          
          {/* Column 1 (4 Cols): Brand & Profile Intro */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-widest text-white">
                WAILLIAN<span className="text-brand-orange">.DEV</span>
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed font-medium max-w-xs">
              အဆင့်မြင့် စနစ်များ၏ တိကျမှန်ကန်မှုအတွက် ဖွဲ့စည်းပုံအခြေခံ ယုတ္တိဗေဒများကို စနစ်တကျ စစ်ဆေးပေးခြင်းနှင့် အလုပ်လုပ်ပုံကောင်းမွန်သော Full-stack Web/Mobile Applications များကို စိတ်ချရစွာ တည်ဆောက်ပေးသည့် နည်းပညာရှင်။
            </p>
          </div>

          {/* Column 2 (2 Cols): Navigation links */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 text-slate-300 text-[11px] font-semibold">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="hover:text-brand-orange transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 (3 Cols): Contact Info */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">
              Contact Info
            </span>
            <div className="flex flex-col space-y-2 text-slate-300 text-[11px] font-medium tracking-wide">
              <a href="tel:+959XXXXXXXX" className="hover:text-brand-orange transition-colors w-fit font-mono">
                +95 9 XXXXXXXX
              </a>
              <a href="mailto:waillianchit.dev@gmail.com" className="hover:text-brand-orange transition-colors w-fit break-all font-mono">
                waillianchit.dev@gmail.com
              </a>
              <span className="text-slate-500 text-[11px] font-semibold">Yangon, Myanmar</span>
            </div>
          </div>

          {/* Column 4 (3 Cols): Newsletter Input */}
          <div className="md:col-span-3 flex flex-col space-y-3 w-full">
            <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">
              Get Latest Info
            </span>
            <div className="flex items-center w-full bg-slate-800 rounded-lg p-0.5 border border-slate-700/40 focus-within:border-brand-orange transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-white bg-transparent text-[11px] font-medium px-2.5 py-1.5 outline-none placeholder-slate-500"
              />
              <button 
                className="bg-slate-900 text-white p-1.5 rounded-md hover:bg-brand-orange transition-colors active:scale-95 cursor-pointer"
                onClick={() => alert('Subscribed!')}
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* ====================================================
            PART 3: LOWER FOOTER LEGAL LINKS
           ==================================================== */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-[10px] font-semibold">
          <span>
            Copyright © {new Date().getFullYear()} Waillian Chit. All Rights Reserved.
          </span>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white transition-colors">User Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}