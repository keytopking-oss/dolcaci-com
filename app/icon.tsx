import { ImageResponse } from 'next/og';

// Browser tab favicon. Programmatic so we don't need to bundle a binary
// .ico — Next compiles this on the fly to a 32x32 PNG. Visual is a simple
// "d" monogram on the same cream as the page so it reads as DOLCACI's
// without trying to recreate the decorative wordmark at favicon scale.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 26,
          background: '#eceae6',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0a0a0a',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          paddingBottom: 2,
        }}
      >
        d
      </div>
    ),
    { ...size }
  );
}
