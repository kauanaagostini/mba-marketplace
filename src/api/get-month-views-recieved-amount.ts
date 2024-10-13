import { api } from '@/lib/axios'
import { AmountResponse } from '@/types/AmountResponse'

interface GetMonthViewsRecievedAmountResponse extends AmountResponse {}

export async function getMonthViewsRecievedAmount() {
  const response = await api.get<GetMonthViewsRecievedAmountResponse>(
    '/sellers/metrics/views',
  )

  return response.data
}
