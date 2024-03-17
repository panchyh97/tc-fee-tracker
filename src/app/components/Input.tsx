'use client'

import React, { MouseEventHandler, useState } from 'react';

interface Input {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClearIcon?: MouseEventHandler<SVGSVGElement>;
  className?: string;
  placeholder: string;
  clearIcon?: boolean;
}

const InputComponent = ({
  type = "text",
  onChange,
  className,
  placeholder,
  clearIcon = false,
  onClickClearIcon
}: Input) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className="relative">
      <input
        type={type}
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
          onChange && onChange(e);
        }}
        className={`block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none ${className
          }`}
        placeholder={placeholder}
        autoComplete="off"
      />
      {clearIcon && inputValue && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute top-1/2 right-4 -mt-3 h-6 w-6 text-gray-400 cursor-pointer"
          onClick={(e) => {
            handleClearInput();
            onClickClearIcon && onClickClearIcon(e);
          }}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
    </div>
  );
};

export default InputComponent;
