import React from 'react';

export interface ImageProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * Image width
   */
  width?: number | string;
  /**
   * Image height
   */
  height?: number | string;
  /**
   * Horizontal alignment
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Title attribute
   */
  title?: string;
}

/**
 * Image component - Email-safe responsive images
 */
export function Image({ src, alt, width, height, align = 'center', className, title }: ImageProps) {
  const imgStyle: React.CSSProperties = {
    display: 'block',
    border: 0,
    outline: 'none',
    textDecoration: 'none',
    maxWidth: '100%',
    height: 'auto',
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  return (
    <table role="presentation" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td align={align} valign="top">
            <img src={src} alt={alt} title={title} style={imgStyle} className={className} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
