import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '19/05', revenue: 454 },
  { date: '20/05', revenue: 87 },
  { date: '21/05', revenue: 190 },
  { date: '22/05', revenue: 298 },
  { date: '23/05', revenue: 307 },
  { date: '24/05', revenue: 415 },
  { date: '25/05', revenue: 512 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

            <CartesianGrid className="stroke-muted" vertical={false} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
