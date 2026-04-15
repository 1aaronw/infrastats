import { queryPrometheus } from '@/lib/prometheus'

export async function GET() {
  const usage = await queryPrometheus(
    '1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)'
  )
  return Response.json({ usage })
}