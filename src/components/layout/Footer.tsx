interface FooterProps {
  variant?: 'desktop-full' | 'minimal';
}

const DESKTOP_LINKS = ['Contact', 'Location', 'Instagram', 'Facebook'];
const MOBILE_LINKS  = ['Privacy', 'Halal Commitment', 'Feedback'];

export default function Footer({ variant = 'desktop-full' }: FooterProps) {
  const linkClass =
    'text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-opacity text-sm';

  if (variant === 'minimal') {
    return (
      <footer className="bg-[#FDF3E7] flex flex-col items-center text-center px-8 py-8 mb-20">
        <p className="text-xs text-on-surface-variant mb-4">
          © {new Date().getFullYear()} Zehri Biryani House. All Rights Reserved.{' '}
          <span aria-hidden="true" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            زہری
          </span>
        </p>
        <div className="flex gap-6">
          {MOBILE_LINKS.map((link) => (
            <a key={link} href="#" className={linkClass}>
              {link}
            </a>
          ))}
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-surface flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full font-body text-sm">
      <div className="flex flex-col gap-2 items-center md:items-start mb-6 md:mb-0">
        <div className="text-xl font-headline text-primary font-bold">Zehri Biryani House</div>
        <p className="text-on-surface-variant max-w-xs text-center md:text-left">
          Rich, aromatic biryani. Bold spices. Slow-cooked perfection.
        </p>
      </div>

      <div className="flex gap-8 mb-6 md:mb-0">
        {DESKTOP_LINKS.map((link) => (
          <a key={link} href="#" className={linkClass}>
            {link}
          </a>
        ))}
      </div>

      <div className="text-on-surface-variant text-xs text-center md:text-right">
        © {new Date().getFullYear()} Zehri Biryani House. All Rights Reserved.{' '}
        <span aria-hidden="true" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          زہری
        </span>
        <br />
        Built by{' '}
        <a
          href="https://portfolio.jamilharun.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors underline underline-offset-2"
        >
          Jamil Harun
        </a>
      </div>
    </footer>
  );
}
