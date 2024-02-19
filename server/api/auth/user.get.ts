import { ensureAuth } from '~/server/ensureAuth'

export default eventHandler((event) => {
  const user = ensureAuth(event)
  if (!user?.isAdmin)
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied'
    })
  return user
})
