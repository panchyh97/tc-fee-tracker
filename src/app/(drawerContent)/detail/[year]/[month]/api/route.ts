export async function GET(year: string, month: string) {
  const res = await fetch(`http://localhost:4000/api/detail/${year}/${month}`, {
    headers: {
    },
  })
  const months = await res.json()

  return { body: months };
}
