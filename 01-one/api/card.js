import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function () {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 64,
          color: '#040404',
          backgroundColor: '#f2f2f2',
          fontSize: 80,
          lineHeight: 1.125,
          letterSpacing: -1,
          textAlign: 'center',
        },
        children: 'Hello There 👋',
      },
    },
    {
      width: 1200,
      height: 630,
    }
  )
}
