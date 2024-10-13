import { api } from '@/lib/axios'
import { AmountResponse } from '@/types/AmountResponse'

interface GetMonthProductsAvailableAmountResponse extends AmountResponse {}

export async function getMonthProductsAvailableAmount() {
  const response = await api.get<GetMonthProductsAvailableAmountResponse>(
    '/sellers/metrics/products/available',
  )

  return response.data
}
