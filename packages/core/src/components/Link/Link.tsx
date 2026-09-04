import { type CSSProperties, type ReactNode } from 'react';

export interface LinkProps {
  href: string;
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  textDecoration?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
}

/**
 * Link component for email-safe hyperlinks
 * Ensures proper styling and accessibility in all email clients
 */
export function Link({
  href,
  children,
  color = '#0066cc',
  fontSize = 16,
  fontWeight = 'normal',
  textDecoration = 'underline',
  target = '_blank',
  rel = 'noopener noreferrer',
  style = {},
}: LinkProps) {
  const linkStyle: CSSProperties = {
    color,
    fontSize: `${fontSize}px`,
    fontWeight,
    textDecoration,
    ...style,
  };

  return (
    <a href={href} style={linkStyle} target={target} rel={rel}>
      {children}
    </a>
  );
}
