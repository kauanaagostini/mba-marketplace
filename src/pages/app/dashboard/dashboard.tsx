import { Helmet } from 'react-helmet-async'

import { PageTitle } from '@/components/page-title'

import { DayViewsRecievedChart } from './day-views-recieved-chart'
import { MonthProductsAvailableAmount } from './month-products-available-amount'
import { MonthProductsSoldAmount } from './month-products-sold-amount'
import { MonthViewsRecievedAmount } from './month-views-recieved-amount'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <PageTitle
        title="Últimos 30 dias"
        description="Confira as estatísticas da sua loja no último mês"
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 flex flex-col gap-4">
          <MonthProductsSoldAmount />
          <MonthProductsAvailableAmount />
          <MonthViewsRecievedAmount />
        </div>

        <div className="col-span-9">
          <DayViewsRecievedChart />
        </div>
      </div>
    </>
  )
}
