export const rootNotionPageId = '15ff911a4343809c9c82f0223e202809'

export const previewImagesEnabled = true

export const isDev =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

export const port = process.env.PORT || 3000

export const rootDomain = isDev ? `localhost:${port}` : null