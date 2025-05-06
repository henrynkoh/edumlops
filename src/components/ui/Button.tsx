'use client';

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none px-4 py-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
} 