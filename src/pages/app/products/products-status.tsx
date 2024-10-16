export type ProductStatus = 'available' | 'sold' | 'cancelled'

interface ProductStatusProps {
  status: ProductStatus
}

const orderStatusMap: Record<ProductStatus, string> = {
  available: 'Anunciado',
  sold: 'Vendido',
  cancelled: 'Desativado',
}

export function OrderStatus({ status }: ProductStatusProps) {
  return (
    <>
      {status === 'available' && (
        <span className="rounded-full bg-popover-foreground px-2 py-1 text-xs font-medium uppercase text-background">
          {orderStatusMap[status]}
        </span>
      )}
      {status === 'sold' && (
        <span className="bg-success rounded-full px-2 py-1 text-xs font-medium uppercase text-background">
          {orderStatusMap[status]}
        </span>
      )}
      {status === 'cancelled' && (
        <span className="rounded-full bg-foreground px-2 py-1 text-xs font-medium uppercase text-background">
          {orderStatusMap[status]}
        </span>
      )}
    </>
  )
}
