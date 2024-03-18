'use client'

import { useEffect, useRef, useState } from 'react';
import { Input } from '@components';

const menuOptions = [
  '2024',
  '2023',
  '2022',
];

interface IDropdown {
  onChange?: (selectedValue: number) => void;
  initialValue?: string;
}

export const Dropdown = ({ onChange, initialValue = menuOptions[0] }: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>(initialValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange && onChange(option as unknown as number);
  };

  const handleClearInput = () => {
    setSearchTerm('');
    setSelectedOption('');
  };

  const filteredOptions = menuOptions.filter(option =>
    option.toLowerCase().includes(searchTerm)
  );

  const buttonText = selectedOption ? selectedOption : 'Selecciona un año';

  return (
    <div className="relative group w-1/3" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 "
      >
        <span className="mr-2">{buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ml-2 -mr-1 transition-all ease-in-out duration-300 ${isOpen && 'transform rotate-180 text-blue-600'
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${isOpen ? '' : 'hidden'
          } w-full absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-10`}
      >
        <Input onChange={handleInputChange} placeholder='Buscar año' clearIcon onClickClearIcon={handleClearInput} />
        {filteredOptions.map((option, index) => (
          <p
            key={index}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};
