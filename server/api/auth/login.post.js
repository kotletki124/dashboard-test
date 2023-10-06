export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('login', typeof body, body)
  return {
    hello: 'world'
  }
})
