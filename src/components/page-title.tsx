export interface PageTitleProps {
  title: string
  description: string
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-bold text-secondary-foreground">{title}</h1>
      <p className="text-sm">{description}</p>
    </header>
  )
}
