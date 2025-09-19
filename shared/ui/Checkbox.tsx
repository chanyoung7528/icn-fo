'use client';

import { useState } from 'react';
import { CheckIcon } from '@/shared/assets/icon/direction';
import { cn } from '@/shared/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'border-input rounded-xsm flex size-4 h-[2rem] w-[2rem] shrink-0 items-center justify-center border shadow-xs transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-brand-60 data-[state=checked]:border-brand-60',
        'data-[state=unchecked]:border-gray-40',
        className,
        props.disabled && !props.checked && 'disabled:bg-gray-10'
      )}
      {...props}
    >
      {/* Indicator는 state 관리용으로 두되 */}
      <CheckboxPrimitive.Indicator
        forceMount
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        {/* 항상 아이콘 렌더링 */}
        <CheckIcon size="1.2rem" fill={props.checked ? '#fff' : '#D3D3D3'} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
