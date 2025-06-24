import React from 'react';
import './Button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={`button button--${size} ${mode}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
