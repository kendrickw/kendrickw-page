import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  title?: React.ReactNode;
  borderColor: string;
}

export const HoverBox: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  title,
  borderColor,
  children,
}) => {
  return (
    <div
      style={{ borderColor }}
      className={twMerge(
        'bg-gray-700/90 text-white/80',
        'border-4 p-4',
        'whitespace-nowrap',
        className
      )}
    >
      <div className="mb-2 text-2xl">{title}</div>
      {children}
    </div>
  );
};
