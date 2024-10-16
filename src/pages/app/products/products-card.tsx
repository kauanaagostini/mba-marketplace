import { ProductCategory } from './products-category'
import { OrderStatus } from './products-status'

interface ProductDetails {
  product: {
    id: string
    title: string
    description: string
    priceInCents: number
    status: 'available' | 'sold' | 'cancelled'
    owner: {
      id: string
      name: string
      phone: string
      email: string
      avatar: {
        id: string
        url: string
      }
    }
    category: {
      id: string
      title: string
      slug: string
    }
    attachments: [
      {
        id: string
        url: string
      },
    ]
  }
}

export function ProductsCard({ product }: ProductDetails) {
  return (
    <div className="relative h-[250px] w-[330px] rounded-lg bg-card p-1">
      <img
        src={product.attachments[0].url}
        alt=""
        className="h-[144px] w-[322px] rounded object-cover"
      />
      <div className="absolute right-2 top-2 space-x-1">
        <OrderStatus status={product.status} />
        <ProductCategory category={product.category} />
      </div>
      <div className="w-[100%] space-y-2 p-3">
        <div className="flex items-center justify-between">
          <h1 className="flex-1 font-semibold leading-tight">
            {product.title}
          </h1>
          <span className="text-xs uppercase">
            R${' '}
            <strong className="text-lg font-bold">
              {(product.priceInCents / 100).toLocaleString('pt-BR')}
            </strong>
          </span>
        </div>
        <p className="line-clamp-2 w-[100%] overflow-hidden text-sm">
          Sofá revestido em couro legítimo, com estrutura em madeira maciça e
          pés em metal cromado.
        </p>
      </div>
    </div>
  )
}
