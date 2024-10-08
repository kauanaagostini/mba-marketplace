import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { AccessIcon } from '@/assets/icon/access'
import { ArrowRightIcon } from '@/assets/icon/arrow-right-02'
import { CallIcon } from '@/assets/icon/call'
import { MailIcon } from '@/assets/icon/mail-02'
import { UserIcon } from '@/assets/icon/user'
import { ViewIcon } from '@/assets/icon/view'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/ui/password-input'

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="m-6 flex h-[calc(100%-3rem)] flex-col gap-20 rounded-xlg bg-card px-20 py-16">
        <div className="flex flex-1 flex-col gap-12">
          <header>
            <h1 className="text-2xl font-bold text-secondary-foreground">
              Crie sua conta
            </h1>
            <p className="text-sm">
              Informe os seus dados pessoais e de acesso
            </p>
          </header>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-12">
            <fieldset>
              <legend className="text-lg font-semibold text-secondary-foreground">
                Perfil
              </legend>
              <div className="border-b border-muted">
                <Label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase"
                >
                  Nome
                </Label>
                <div className="flex items-center gap-0.5 fill-muted pl-1 focus-within:fill-primary">
                  <UserIcon width={24} height={24} color="muted" />
                  <Input
                    id="name"
                    type="text"
                    {...register('name')}
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div className="border-b border-muted">
                <Label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase"
                >
                  Telefone
                </Label>
                <div className="flex items-center gap-0.5 fill-muted pl-1 focus-within:fill-primary">
                  <CallIcon width={24} height={24} color="muted" />
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-semibold text-secondary-foreground">
                Acesso
              </legend>
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
                      placeholder="Seu e-mail de acesso"
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
                    <PasswordInput
                      id="password"
                      {...register('password')}
                      placeholder="Senha de acesso"
                    />
                  </div>
                </div>

                <div className="border-b border-muted">
                  <Label
                    htmlFor="confimrPassword"
                    className="text-xs font-semibold uppercase"
                  >
                    Confirmar senha
                  </Label>
                  <div className="flex items-center gap-0.5 fill-muted pl-1 focus-within:fill-primary">
                    <AccessIcon width={24} height={24} color="muted" />
                    <Input
                      id="confimrPassword"
                      type="password"
                      // {...register('confimrPassword')}
                      placeholder="Confirme a senha"
                    />
                    <ViewIcon width={24} height={24} color="muted" />
                  </div>
                </div>
              </div>
            </fieldset>

            <Button
              type="submit"
              className="flex w-full justify-between font-medium"
              size={'lg'}
              disabled={isSubmitting}
            >
              Cadastrar
              <ArrowRightIcon
                color="--primary-foreground"
                width={24}
                height={24}
              />
            </Button>
          </form>
        </div>
        <div className="space-y-5">
          <p>Já tem uma conta?</p>
          <Button
            variant={'secondary'}
            className="flex justify-between"
            size={'lg'}
            asChild
          >
            <Link to={'/sign-in'}>
              Acessar
              <ArrowRightIcon
                color="--primary-foreground"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
