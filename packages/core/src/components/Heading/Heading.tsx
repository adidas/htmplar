import { type CSSProperties, type ReactNode } from 'react';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  align?: 'left' | 'center' | 'right';
  margin?: string | number;
  lineHeight?: string | number;
  style?: CSSProperties;
}

/**
 * Heading component for semantic email headings
 * Uses proper HTML heading tags (h1-h6) with email-safe styling
 */
export function Heading({
  level = 2,
  children,
  color = '#333333',
  fontSize,
  fontWeight = 'bold',
  align = 'left',
  margin = '0 0 16px 0',
  lineHeight = 1.3,
  style = {},
}: HeadingProps) {
  // Default font sizes for each heading level
  const defaultFontSizes = {
    1: 32,
    2: 28,
    3: 24,
    4: 20,
    5: 18,
    6: 16,
  };

  const headingStyle: CSSProperties = {
    margin,
    padding: 0,
    color,
    fontSize: `${fontSize || defaultFontSizes[level]}px`,
    fontWeight,
    textAlign: align,
    lineHeight: typeof lineHeight === 'number' ? lineHeight : lineHeight,
    ...style,
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag style={headingStyle}>{children}</Tag>;
}
