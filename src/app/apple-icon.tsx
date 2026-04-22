import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: '#22c55e',
        fontSize: 110,
        fontWeight: 700,
        fontFamily: 'ui-monospace, SFMono-Regular, monospace',
        letterSpacing: -4,
        borderRadius: 32,
      }}
    >
      {'>_'}
    </div>,
    { ...size },
  );
}
