import { queryPrometheus } from '@/lib/prometheus'

export async function GET() {
  const usage = await queryPrometheus(
    'avg(rate(node_cpu_seconds_total{mode!="idle"}[5m]))'
  )
  return Response.json({ usage })
}