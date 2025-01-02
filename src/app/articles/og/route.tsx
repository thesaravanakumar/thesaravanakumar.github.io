import { ImageResponse } from 'next/server'
import Image from 'next/image';

export const runtime = 'edge'

// GET
export async function GET(request: Request) {
  // Satoshi Regular
  const satoshi400 = fetch(
    new URL('../../../fonts/Satoshi-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  // Satoshi Bold
  const satoshi700 = fetch(
    new URL('../../../fonts/Satoshi-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Random thoughts and experiments'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050608',
            fontFamily: '"Satoshi"',
            backgroundImage:
              'linear-gradient(to bottom right, #1A2028, #050608)',
          }}
        >
          <div tw="flex items-center pl-10 pr-30 h-10 border-b-4 border-gray-700/60">
            <div tw="border-l-4 border-r-4 w-full h-10 border-gray-700/60"></div>
          </div>

          <div tw="flex flex-1 pl-10 pr-30">
            <div tw="flex flex-col justify-center w-full pl-20 pr-20 pt-14 pb-14 border-l-4 border-r-4 border-gray-700/60">
              <h1
                tw="text-7xl text-white tracking-tight max-w-3/4"
                style={{ fontFamily: 'Satoshi Bold' }}
              >
                {title}
              </h1>

              <div tw="flex items-center border-t-4 border-gray-700/40 mt-8 pt-8">
                <Image
                  src="https://saravana.com/avatar.jpg"
                  alt='avatar'
                  title="saravana Kumar"
                  width="80"
                  height="80"
                  tw="rounded-full mr-10 border-4 border-[#00CB2C]"
                />
                <div
                  tw="flex items-center text-gray-500 text-5xl"
                  style={{ fontFamily: 'Satoshi Regular' }}
                >
                  <span>saravana.co</span>
                  <span tw="mx-2 text-gray-700 text-6xl">/</span>
                  <span>articles</span>
                </div>
              </div>
            </div>
          </div>

          <div tw="flex items-center pl-10 pr-30 h-10 border-t-4 border-gray-700/60">
            <div tw="border-l-4 border-r-4 w-full h-10 border-gray-700/60"></div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Satoshi Regular',
            data: await satoshi400,
            style: 'normal',
          },
          {
            name: 'Satoshi Bold',
            data: await satoshi700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
