import React from 'react'

interface IButton {
  title: string;
}

export const Button = ({ title }: IButton) => {
  return (
    <button
      className="w-full select-none rounded-2xl bg-blue-600 py-2 px-6 text-center align-middle text-base font-bold  text-white shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:shadow-blue-600/40 focus:opacity-[0.85] hover:opacity-50 focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      {title}
    </button>
  )
}
