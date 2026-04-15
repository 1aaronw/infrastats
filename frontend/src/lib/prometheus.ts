export async function queryPrometheus(query: string): Promise<number> {
  const url = new URL('/api/v1/query', process.env.PROMETHEUS_URL)
  url.searchParams.set('query', query)

  const res = await fetch(url.toString())
  const json = await res.json()

  const result = json?.data?.result?.[0]?.value?.[1]
  return result ? parseFloat(result) : 0
}