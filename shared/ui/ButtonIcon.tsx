import * as React from 'react';
import { cn } from '@/shared/lib';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      neutral: '',
    },
    appearance: {
      solid: '',
      outline: '',
    },
    size: {
      default: 'h-[5.2rem] w-[5.2rem]',
    },
  },
  compoundVariants: [
    // Primary Solid
    {
      variant: 'primary',
      appearance: 'solid',
      className:
        'bg-brand-60 text-white border-transparent shadow-xs   active:bg-brand-80 disabled:bg-gray-30 disabled:text-white disabled:border-transparent',
    },
    // Primary Outline
    {
      variant: 'primary',
      appearance: 'outline',
      className:
        'bg-white text-brand-60 border border-brand-60  active:bg-brand-10 active:text-brand-60 disabled:bg-gray-10 disabled:text-[#D3D3D3] disabled:border-gray-40',
    },
    // Secondary Solid
    {
      variant: 'secondary',
      appearance: 'solid',
      className:
        'bg-gray-100 text-white border border-gray-100 shadow-xs   active:bg-black active:border-black disabled:bg-gray-30 disabled:text-white disabled:border-transparent',
    },
    // Secondary Outline
    {
      variant: 'secondary',
      appearance: 'outline',
      className:
        'bg-white text-gray-100 border border-gray-100   active:bg-gray-20 active:text-black disabled:bg-gray-10 disabled:text-[#D3D3D3] disabled:border-gray-40',
    },
    // Neutral Solid
    {
      variant: 'neutral',
      appearance: 'solid',
      className:
        'bg-gray-20 text-gray-80 border border-gray-20   active:bg-gray-30 active:text-gray-80 disabled:bg-gray-30 disabled:text-white disabled:border-transparent',
    },
    // Neutral Outline
    {
      variant: 'neutral',
      appearance: 'outline',
      className:
        'bg-white text-gray-50 border border-gray-30   active:bg-gray-20 active:text-gray-50 disabled:bg-gray-10 disabled:text-[#D3D3D3] disabled:border-gray-40',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    appearance: 'solid',
    size: 'default',
  },
});

function ButtonIcon({
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
    children?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : 'button';

  console.log('variant', variant);

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, appearance, size, className }))} {...props}>
      {children}
    </Comp>
  );
}

export { ButtonIcon, buttonVariants };
