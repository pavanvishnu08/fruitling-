import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-fruitlinq-orange text-white hover:bg-orange-600 hover:shadow-lg focus:ring-orange-500 border border-transparent",
    secondary: "bg-fruitlinq-green text-white hover:bg-green-700 hover:shadow-lg focus:ring-green-500 border border-transparent",
    outline: "bg-transparent text-fruitlinq-orange border-2 border-fruitlinq-orange hover:bg-orange-50 focus:ring-orange-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg focus:ring-green-400 border border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;