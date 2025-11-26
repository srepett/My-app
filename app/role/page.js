import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,221,255,0.5)]">
        LEGENDS <span className="text-[#00ddff]">ROSTER</span>
      </h1>
      <p className="text-slate-400 mb-12 max-w-md text-lg">
        Temukan Hero terbaik untuk setiap Role dan kuasai Land of Dawn.
      </p>
      
      <Link href="/role" className="group relative px-10 py-4 font-bold text-black uppercase tracking-widest inline-block">
        <div className="absolute inset-0 bg-[#00ddff] rounded-sm skew-x-[-10deg] group-hover:skew-x-[-5deg] transition-transform duration-300 shadow-[0_0_20px_#00ddff]"></div>
        <span className="relative flex items-center gap-2">
          Download / Mulai <ArrowRight size={20} />
        </span>
      </Link>
    </div>
  );
}
