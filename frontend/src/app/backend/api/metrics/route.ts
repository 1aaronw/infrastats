// frontend/src/app/backend/api/metrics/route.ts
import { queryPrometheus } from '@/lib/prometheus'

export async function GET() {
  const [cpu, memory, disk] = await Promise.all([
    queryPrometheus('avg(rate(node_cpu_seconds_total{mode!="idle"}[5m]))'),
    queryPrometheus('1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)'),
    queryPrometheus('avg(1 - (node_filesystem_avail_bytes{fstype!="tmpfs"} / node_filesystem_size_bytes{fstype!="tmpfs"}))'),
  ])

  return Response.json({ cpu, memory, disk })
}