import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { getMyProducts } from '@/api/get-my-products'
import { PageTitle } from '@/components/page-title'

import { ProductsCard } from './products-card'
import { ProductsFilters } from './products-filter'

export function Products() {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')
  const status = searchParams.get('status')

  const { data: myProducts } = useQuery({
    queryKey: ['products', search, status],
    queryFn: () => getMyProducts({ search, status }),
  })
  return (
    <>
      <Helmet title="Seus Produtos" />
      <PageTitle
        title="Seus produtos"
        description="Acesse gerencie a sua lista de produtos à venda"
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-4">
          <ProductsFilters />
        </div>

        <div className="col-span-8 grid grid-cols-2 gap-4">
          {myProducts &&
            myProducts.products.map((product) => {
              return <ProductsCard key={product.id} product={product} />
            })}
        </div>
      </div>
    </>
  )
}
