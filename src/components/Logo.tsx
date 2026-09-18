interface LogoProps {
  variant?: 'light' | 'dark' | 'monochrome' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className = '' }: LogoProps) {
  const isDarkBg = variant === 'light';

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none font-heading tracking-tight ${className}`}>
      {/* Abstract geometric S-D monogram node */}
      <div className="relative flex items-center justify-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform duration-300 group-hover:scale-105"
        >
          <rect
            x="1"
            y="1"
            width="26"
            height="26"
            rx="7"
            fill={isDarkBg ? '#102747' : '#EAF6FC'}
            stroke={isDarkBg ? '#1E3E6B' : '#B8E5FA'}
            strokeWidth="1.2"
          />
          <path
            d="M18 9H11C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13H17C18.1046 13 19 13.8954 19 15C19 16.1046 18.1046 17 17 17H9"
            stroke={isDarkBg ? '#B8E5FA' : '#0B1F3A'}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="13" r="1.8" fill="#2F80ED" />
        </svg>
      </div>

      {/* Clean lower-case wordmark inspired by reference: "syscon — digital" */}
      {variant !== 'icon-only' && (
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-semibold tracking-tight ${textSizes[size]} ${
              isDarkBg ? 'text-white' : 'text-[#0B1F3A]'
            }`}
          >
            syscon
          </span>
          <span
            className={`font-light text-sm ${
              isDarkBg ? 'text-slate-400' : 'text-[#2F80ED]'
            }`}
          >
            —
          </span>
          <span
            className={`font-normal tracking-tight ${textSizes[size]} ${
              isDarkBg ? 'text-[#B8E5FA]' : 'text-[#0B1F3A]'
            }`}
          >
            digital
          </span>
        </div>
      )}
    </div>
  );
}
