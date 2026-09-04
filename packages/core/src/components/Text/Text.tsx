import React from 'react';

export interface TextProps {
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Font size (in pixels)
   * @default 16
   */
  fontSize?: number;
  /**
   * Font family
   * @default 'Arial, sans-serif'
   */
  fontFamily?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Line height
   * @default 1.5
   */
  lineHeight?: number | string;
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Font weight
   */
  fontWeight?: 'normal' | 'bold' | number;
  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Text component - Email-safe text rendering
 */
export function Text({
  children,
  fontSize = 16,
  fontFamily = 'Arial, sans-serif',
  color,
  lineHeight = 1.5,
  align = 'left',
  fontWeight,
  className,
}: TextProps) {
  const style: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    fontFamily,
    color,
    lineHeight: typeof lineHeight === 'number' ? lineHeight : lineHeight,
    textAlign: align,
    fontWeight,
    margin: 0,
    padding: 0,
  };

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
}
