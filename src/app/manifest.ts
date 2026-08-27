import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hello Doctor',
    short_name: 'Hello Doctor',
    description: 'Bihar Health Care - Trusted Health Partner for Siwan & Gopalganj',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: 'https://picsum.photos/seed/doc1/192/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://picsum.photos/seed/doc1/512/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
