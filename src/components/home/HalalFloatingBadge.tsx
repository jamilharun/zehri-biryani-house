export default function HalalFloatingBadge() {
  return (
    <div className="hidden md:flex max-w-7xl mx-auto px-8 -mt-12 relative z-30 justify-start">
      <div className="bg-surface-container-highest border border-[#1B5E20]/20 rounded-xl px-6 py-3 flex items-center gap-4 shadow-xl">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
          <span
            className="material-symbols-outlined text-[#F9A825]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            aria-hidden="true"
          >
            verified
          </span>
        </div>
        <div>
          <p className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
            Certified
          </p>
          <p className="text-sm font-headline font-extrabold text-on-surface">
            100% HALAL SELECTION
          </p>
        </div>
      </div>
    </div>
  );
}
