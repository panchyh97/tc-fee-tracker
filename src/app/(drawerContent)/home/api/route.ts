export async function GET(year: number) {
  const res = await fetch(`http://localhost:4000/api/monthSummary/${year}`, {
    headers: {
    },
  })
  const months = await res.json()

  return { body: months };
}
