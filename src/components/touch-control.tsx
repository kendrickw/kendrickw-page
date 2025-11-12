import { type ControlEvent } from '@/hooks/register-control';
import { Icon } from '@iconify/react';
import React from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  showControl?: boolean;
  onPress?: (key: keyof ControlEvent, state: boolean) => void;
}

const TouchControlImpl: React.FC<Props> = ({
  className,
  showControl,
  onPress,
}) => {
  if (!showControl) {
    return null;
  }

  return (
    <div
      className={twMerge(
        'absolute inset-0 p-8',
        'select-none',
        'flex items-end justify-between',
        className
      )}
    >
      {/* Left Side - Movement Controls */}
      <div className="flex gap-3">
        {/* Left Button */}
        <button
          className={twJoin(
            'h-16 w-16',
            'flex items-center justify-center',
            'rounded-full text-3xl',
            'bg-white/20 backdrop-blur-sm active:bg-white/40'
          )}
          onTouchStart={() => onPress?.('left', true)}
          onTouchEnd={() => onPress?.('left', false)}
          onMouseDown={() => onPress?.('left', true)}
          onMouseUp={() => onPress?.('left', false)}
          onMouseLeave={() => onPress?.('left', false)}
        >
          <Icon icon="pixelarticons:arrow-left" />
        </button>
        {/* Right Button */}
        <button
          className={twJoin(
            'h-16 w-16',
            'flex items-center justify-center',
            'rounded-full text-3xl',
            'bg-white/20 backdrop-blur-sm active:bg-white/40'
          )}
          onTouchStart={() => onPress?.('right', true)}
          onTouchEnd={() => onPress?.('right', false)}
          onMouseDown={() => onPress?.('right', true)}
          onMouseUp={() => onPress?.('right', false)}
          onMouseLeave={() => onPress?.('right', false)}
        >
          <Icon icon="pixelarticons:arrow-right" />
        </button>
      </div>

      {/* Right Side - Jump Button */}
      <div>
        <button
          className={twJoin(
            'h-20 w-20',
            'flex items-center justify-center',
            'rounded-full text-xl font-bold',
            'bg-white/20 backdrop-blur-sm active:bg-white/40'
          )}
          onTouchStart={() => onPress?.('jump', true)}
          onTouchEnd={() => onPress?.('jump', false)}
          onMouseDown={() => onPress?.('jump', true)}
          onMouseUp={() => onPress?.('jump', false)}
          onMouseLeave={() => onPress?.('jump', false)}
        >
          JUMP
        </button>
      </div>
    </div>
  );
};
TouchControlImpl.displayName = 'TouchControl';

// Make sure this component won't re-render unless props are modified
export const TouchControl = React.memo(TouchControlImpl);
