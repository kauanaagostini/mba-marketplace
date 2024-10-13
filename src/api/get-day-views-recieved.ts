import { api } from '@/lib/axios'

interface GetDayViewsRecievedResponse {
  viewsPerDay: [
    {
      date: Date | null
      amount: number
    },
  ]
}

export async function getDayViewsRecieved() {
  const response = await api.get<GetDayViewsRecievedResponse>(
    '/sellers/metrics/views/days',
  )
  if (response.data.viewsPerDay) {
    response.data.viewsPerDay.forEach((day) => {
      if (day.date) {
        day.date = new Date(day.date)
      }
    })
  }

  return response.data
}
