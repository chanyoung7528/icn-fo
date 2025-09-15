import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

type ButtonVariant = 'primary' | 'secondary' | 'neutral';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap  rounded-btn-lg  text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        neutral: '',
      },
      appearance: {
        default: '',
        outline: '',
        text: '',
      },
      size: {
        default: 'h-[44px] btn-rad-md px-4 py-2 has-[>svg]:px-3',
        xsm: 'h-[28px] btn-rad-xsm px-3 has-[>svg]:px-2.5',
        sm: 'h-[40px] btn-rad-sm gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-[48px] btn-rad-lg px-6 has-[>svg]:px-4',
        xl: 'h-[52px] btn-rad-xl px-8 has-[>svg]:px-6',
        icon: 'size-9',
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: 'primary',
        appearance: 'default',
        class: 'bg-brand-60 text-background  active:bg-brand-80 disabled:bg-gray-30 ',
      },
      {
        variant: 'primary',
        appearance: 'outline',
        class:
          'border border-brand-60 text-brand-60 active:bg-brand-10 disabled:bg-gray-10 disabled:text-gray-40 disabled:border-gray-40',
      },

      // Secondary
      {
        variant: 'secondary',
        appearance: 'default',
        class:
          'bg-gray-100 text-background active:bg-black disabled:bg-gray-30 disabled:text-background disabled:border-gray-30',
      },
      {
        variant: 'secondary',
        appearance: 'outline',
        class:
          'border border-gray-100 text-gray-100 active:bg-gray-20 disabled:bg-gray-10 disabled:text-gray-40 disabled:border-gray-40',
      },
      {
        variant: 'secondary',
        appearance: 'text',
        class:
          'border-none text-gray-100 active:bg-background  disabled:bg-background disabled:text-gray-40 disabled:border-background',
      },
      //neutral
      {
        variant: 'neutral',
        appearance: 'default',
        class:
          'bg-gray-20 text-gray-80 border border-gray-20 active:bg-gray-30 active:border-gray-20 active:text-gray-80 disabled:bg-gray-30 disabled:text-background disabled:border-gray-30',
      },
      {
        variant: 'neutral',
        appearance: 'outline',
        class:
          'bg-background border border-gray-30 text-gray-80 active:bg-gray-20 active:border-gray-30 active:text-gray-80 disabled:bg-gray-10 disabled:text-gray-40 disabled:border-gray-40',
      },
      {
        variant: 'neutral',
        appearance: 'text',
        class: 'border-none text-gray-50 active:bg-background  disabled:bg-background disabled:text-gray-40',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      appearance: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  appearance,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, appearance, size, className }))} {...props}>
      {children}
    </Comp>
  );
}

export { Button, buttonVariants, type ButtonVariant };
