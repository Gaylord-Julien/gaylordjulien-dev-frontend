import { NextResponse } from 'next/server';
import sharp from 'sharp';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const image = searchParams.get('image') ?? undefined;
  const width = searchParams.get('w') ?? undefined;
  const height = searchParams.get('h') ?? undefined;
  const objectFit = searchParams.get('fit') ?? undefined;
  const enlarge = searchParams.get('enlarge') ?? undefined;

  if (!image || !width) {
    return NextResponse.json({ error: 'Image or width parameter is missing.' }, { status: 400 });
  }

  // Fetch and process the image
  try {
    const response = await fetch(image);
    if (!response.ok) {
      throw new Error('Failed to fetch image.');
    }
    const imageBuffer = Buffer.from(await response.arrayBuffer());

    let resizedImage;

    if (enlarge) {
      resizedImage = await sharp(imageBuffer)
        .resize({
          fit: sharp.fit.inside,
          width: 1250,
          height: 1500,
          withoutEnlargement: false,
        })
        .toBuffer();
    } else {
      resizedImage = await sharp(imageBuffer)
        .resize({
          // if fit is provided, use it, otherwise no
          fit: objectFit as keyof sharp.FitEnum | undefined,
          width: parseInt(width),
          height: height ? parseInt(height) : undefined,
        })
        .toBuffer();
    }

    // Serve the resized image
    return new Response(resizedImage, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age =31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ error: 'Failed to process image.' }, { status: 500 });
  }
}
