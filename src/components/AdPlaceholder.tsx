interface AdPlaceholderProps {
  size: '728x90' | '300x600' | '300x250' | '320x100' | '336x450';
  className?: string;
}

const sizeClasses = {
  '728x90': 'h-[90px] w-full max-w-[728px]',
  '300x600': 'h-[600px] w-[300px]',
  '300x250': 'h-[250px] w-[300px]',
  '320x100': 'h-[100px] w-full max-w-[320px]',
  '336x450': 'h-[450px] w-[336px]'
};

export function AdPlaceholder({ size, className = '' }: AdPlaceholderProps) {
  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        border-2 border-dashed border-muted-foreground/30 
        rounded-lg flex flex-col items-center justify-center 
        bg-muted/30 text-muted-foreground
        ${className}
      `}
    >
      <span className="text-2xl mb-1">📢</span>
      <span className="text-xs font-mono uppercase tracking-wider">Google AdSense</span>
      <span className="text-xs font-mono text-muted-foreground/60 mt-1">{size}</span>
    </div>
  );
}
