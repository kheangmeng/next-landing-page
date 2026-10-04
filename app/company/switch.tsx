import React, { ReactNode } from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  iconOn?: ReactNode;
  iconOff?: ReactNode;
  className?: string;
}

export function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  iconOn,
  iconOff,
  className = '',
}: SwitchProps) {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <label
      className={`inline-flex items-center gap-3 ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${className}`}
    >
      {/* Switch Track Button */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label || 'Toggle switch'}
        disabled={disabled}
        onClick={handleToggle}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
        }`}
      >
        {/* Sliding Thumb / Handle */}
        <span
          className={`pointer-events-none flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        >
          {/* Render icon conditionally inside thumb */}
          {checked ? iconOn : iconOff}
        </span>
      </button>

      {/* Optional Label */}
      {label && (
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 select-none">
          {label}
        </span>
      )}
    </label>
  );
}
