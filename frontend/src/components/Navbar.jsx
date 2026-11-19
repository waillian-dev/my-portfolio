export default function Navbar() {
  // Navigation Links matched with your architecture
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Project", href: "#project" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    /* PREMIUM FIXED & FLOATING NAVBAR WRAPPER */
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 select-none">
      
      <nav className="w-full max-w-5xl h-16 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full flex items-center justify-between px-4 sm:px-6 md:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        
        {/* 1. BRAND LOGO */}
        <a href="#home" className="flex items-center gap-1 cursor-pointer shrink-0">
          <span className="text-xs sm:text-sm md:text-lg font-black tracking-wider text-slate-900">
            WAILLIAN<span className="text-[#FD8439]">Chit</span>
          </span>
        </a>

        {/* 2. FIXED NAVIGATION LINKS 
            (Tailwind 'hidden' တွေ လုံးဝဖြုတ်ပစ်လိုက်လို့ Mobile မှာပါ ပုံသေတန်းစီပေါ်နေမှာဖြစ်ပြီး စာလုံးမကျိုးအောင် overflow-x-auto သုံးထားပါတယ်) */}
        <div className="flex items-center space-x-3 sm:space-x-5 md:space-x-8 overflow-x-auto no-scrollbar py-1 px-2 mx-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#FD8439] transition-colors relative group py-1 whitespace-nowrap"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FD8439] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 3. CONTACT CTA BUTTON */}
        <div className="shrink-0">
          <a
            href="#contact"
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-[#FD8439] text-[#FD8439] text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[#FD8439] hover:text-white transition-all duration-300 shadow-3xs whitespace-nowrap"
          >
            Let's Talk
          </a>
        </div>

      </nav>
    </div>
  );
}