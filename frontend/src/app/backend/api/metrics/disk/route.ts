import { queryPrometheus } from '@/lib/prometheus'

export async function GET() {
  const usage = await queryPrometheus(
    'avg(1 - (node_filesystem_avail_bytes{fstype!="tmpfs"} / node_filesystem_size_bytes{fstype!="tmpfs"}))'
  )
  return Response.json({ usage })
}