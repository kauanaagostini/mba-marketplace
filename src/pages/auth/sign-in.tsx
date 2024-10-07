import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { AccessIcon } from '@/assets/icon/access'
import { ArrowRightIcon } from '@/assets/icon/arrow-right-02'
import { MailIcon } from '@/assets/icon/mail-02'
import { ViewIcon } from '@/assets/icon/view'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="m-6 flex h-[calc(100%-3rem)] flex-col rounded-xlg bg-card px-20 py-16">
        {' '}
        {/* content */}
        <div className="flex flex-1 flex-col gap-12">
          {' '}
          {/* Account */}
          <header>
            <h1 className="text-2xl font-bold text-secondary-foreground">
              Acesse sua conta
            </h1>
            <p className="text-sm">Informe seu e-mail e senha para entrar</p>
          </header>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-12">
            <div>
              <div className="border-b border-muted">
                <Label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase"
                >
                  E-mail
                </Label>
                <div className="flex items-center gap-0.5 fill-muted pl-1 focus-within:fill-primary">
                  <MailIcon width={24} height={24} color="muted" />
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Seu e-mail cadastrado"
                  />
                </div>
              </div>
              <div className="border-b border-muted">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase"
                >
                  Senha
                </Label>
                <div className="flex items-center gap-0.5 fill-muted pl-1 focus-within:fill-primary">
                  <AccessIcon width={24} height={24} color="muted" />
                  <Input
                    id="password"
                    type="password"
                    {...register('password')}
                    placeholder="Sua senha de acesso"
                  />
                  <ViewIcon width={24} height={24} color="muted" />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="flex w-full justify-between font-medium"
              size={'lg'}
              disabled={isSubmitting}
            >
              Acessar
              <ArrowRightIcon
                color="--primary-foreground"
                width={24}
                height={24}
              />
            </Button>
          </form>
        </div>
        <div>
          <p>Ainda não tem uma conta?</p>
          <Button
            variant={'secondary'}
            className="flex justify-between"
            size={'lg'}
          >
            Cadastrar
            <ArrowRightIcon
              color="--primary-foreground"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
