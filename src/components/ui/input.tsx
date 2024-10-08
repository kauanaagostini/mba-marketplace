import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sufix, className, type, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          type={type}
          className={cn(
            'flex h-9 w-full bg-transparent px-3 py-1 text-secondary-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {sufix}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
