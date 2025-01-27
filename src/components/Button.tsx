interface Props{
    title: string;
    leftIcon?: React.ReactNode;
    containerClass?: string;
    onClick?: () => void;
    id?: string;
    rightIcon?: React.ReactNode;
}

const Button = ({title, leftIcon, containerClass, onClick,id, rightIcon}:Props) => {
  return (
    <button id={id} onClick={onClick} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}

        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
        </span>
        {rightIcon}
    </button>
  )
}

export default Button