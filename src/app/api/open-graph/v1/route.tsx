import { ImageResponse } from 'next/og';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  const title = searchParams.get('title');
  if (!title) {
    return NextResponse.json({ error: 'Missing title' }, { status: 400 });
  }
  const decodedTitle = decodeURIComponent(title);

  const fontData = await fetch(
    'https://minio-dcgc4ow.gutter8507.cc/fars/inter_tight_v7_latin_regular_2ff0f6d012.ttf'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          color: 'black',
          background: '#94b350',
          width: '100%',
          height: '100%',
          textAlign: 'right',
          justifyContent: 'flex-start',
          padding: '55px',
          backgroundImage: `url(${process.env.NEXT_PUBLIC_PROD_URL}/api/image-transformation?image=${url}?fit=cover&h=1250&w=630&enlarge=true)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Inter',
        }}
      >
        {title && (
          <span
            style={{
              position: 'absolute',
              bottom: 50,
              color: '#fff',
              padding: '10px 30px 15px 30px',
              left: 50,
              background: '#94b350',
            }}
          >
            {decodedTitle} - {process.env.NEXT_PUBLIC_SITE_NAME}
          </span>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: fontData,
          name: 'Inter',
          style: 'normal',
        },
      ],
    }
  );
}
