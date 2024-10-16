interface CategoryProps {
  category: {
    id: string
    title: string
    slug: string
  }
}

export function ProductCategory({ category }: CategoryProps) {
  return (
    <span className="rounded-full bg-secondary-foreground px-2 py-1 text-xs font-medium uppercase text-background">
      {category.title}
    </span>
  )
}
