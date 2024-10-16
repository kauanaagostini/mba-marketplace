import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { SaleTagIcon } from '@/assets/icon/sale-tag'
import { SearchIcon } from '@/assets/icon/search'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const productsFiltersSchema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>

export function ProductsFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')
  const status = searchParams.get('status')

  const { register, handleSubmit, control } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
    defaultValues: {
      search: search ?? '',
      status: status ?? '',
    },
  })

  function handleFilter({ search, status }: ProductsFiltersSchema) {
    setSearchParams((state) => {
      if (search) {
        state.set('search', search)
      } else {
        state.delete('search')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      return state
    })
  }

  return (
    <div className="space-y-6 rounded-lg bg-card p-6">
      <span className="text-lg font-bold">Filtrar</span>
      <form onSubmit={handleSubmit(handleFilter)} className="space-y-10">
        <div className="space-y-5">
          <div className="flex items-center gap-0.5 border-b-2 border-muted-foreground fill-muted pl-1 focus-within:fill-primary">
            <SearchIcon width={24} height={24} color="muted" />
            <Input
              id="search"
              type="text"
              {...register('search')}
              placeholder="Pesquisar"
            />
          </div>

          <Controller
            name="status"
            control={control}
            render={({ field: { name, onChange, value, disabled } }) => {
              return (
                <Select
                  name={name}
                  onValueChange={onChange}
                  value={value}
                  disabled={disabled}
                >
                  <SelectTrigger>
                    <SaleTagIcon width={24} height={24} color="muted" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Anunciado</SelectItem>
                    <SelectItem value="sold">Vendido</SelectItem>
                    <SelectItem value="cancelled">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
          />
        </div>
        <Button type="submit" className="mt-5">
          Aplicar filtro
        </Button>
      </form>
    </div>
  )
}
