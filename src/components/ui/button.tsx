import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xsm transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary fill-primary-foreground text-primary-foreground shadow hover:bg-primary-hover',
        secondary:
          'bg-transparent text-primary fill-primary hover:fill-primary-hover border shadow-sm hover:border-border-hover hover:text-primary-hover',
        ghost:
          'text-foreground hover:bg-accent hover:text-primary fill-foreground hover:fill-primary',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'bg-accent fill-foreground',
      },
      size: {
        default: 'w-[265px] h-12  py-3.5',
        sm: 'w-[139px] h-10 py-2.5 text-sm',
        lg: 'max-w-[403px] w-full h-14 py-4 px-5',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
