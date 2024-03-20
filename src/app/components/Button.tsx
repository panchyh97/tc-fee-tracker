interface IButton {
  title: string;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
}

export const Button = ({ title, onClick, className, outline = false }: IButton) => {
  return (
    <button
      className={`${outline ? "border-2 border-blue-600 text-blue-600" : "bg-blue-600 text-white"} w-full select-none rounded-2xl  py-2 px-6 text-center align-middle text-base font-bold  shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:shadow-blue-600/40 focus:opacity-[0.85] hover:opacity-50 focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${className}`}
      type="button"
      data-ripple-light="true"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
