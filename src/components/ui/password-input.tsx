import { EyeIcon, EyeOffIcon } from 'lucide-react'
import * as React from 'react'

// import { ViewIcon } from '@/assets/icon/view'
// import { ViewOffIcon } from '@/assets/icon/view-off'
import { Input } from './input'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix?: React.ReactNode
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    console.log(showPassword)
    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        sufix={
          showPassword ? (
            <EyeIcon
              className="select-none text-muted"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOffIcon
              className="select-none text-muted"
              onClick={() => setShowPassword(true)}
            />
          )
        }
        // sufix={showPassword ? <ViewIcon onClick={() => setShowPassword(false)} color={''} width={24} height={24} /> : <ViewOffIcon onClick={() => console.log('teste true')} color={''} width={24} height={24} />}
        className={className}
        {...props}
        ref={ref}
      />
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
