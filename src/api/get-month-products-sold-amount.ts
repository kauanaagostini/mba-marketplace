import { api } from '@/lib/axios'
import { AmountResponse } from '@/types/AmountResponse'

interface GetMonthProductsSoldAmountResponse extends AmountResponse {}

export async function getMonthProductsSoldAmount() {
  const response = await api.get<GetMonthProductsSoldAmountResponse>(
    '/sellers/metrics/products/sold',
  )

  return response.data
}
