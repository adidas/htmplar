import React from 'react';

export interface ButtonProps {
  /**
   * Button text
   */
  children: React.ReactNode;
  /**
   * Link URL
   */
  href: string;
  /**
   * Background color
   * @default '#0066cc'
   */
  backgroundColor?: string;
  /**
   * Text color
   * @default '#ffffff'
   */
  color?: string;
  /**
   * Padding
   * @default '12px 24px'
   */
  padding?: string;
  /**
   * Border radius
   * @default '4px'
   */
  borderRadius?: string;
  /**
   * Font size
   * @default 16
   */
  fontSize?: number;
  /**
   * Font family
   * @default 'Arial, sans-serif'
   */
  fontFamily?: string;
  /**
   * Font weight
   * @default 'bold'
   */
  fontWeight?: 'normal' | 'bold' | number;
  /**
   * Text alignment
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * Button component - Email-safe call-to-action button
 * Uses bulletproof button technique with VML for Outlook
 */
export function Button({
  children,
  href,
  backgroundColor = '#0066cc',
  color = '#ffffff',
  padding = '12px 24px',
  borderRadius = '4px',
  fontSize = 16,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  align = 'center',
  fullWidth = false,
  className,
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color,
    textDecoration: 'none',
    padding,
    borderRadius,
    fontSize: `${fontSize}px`,
    fontFamily,
    fontWeight,
    display: 'inline-block',
    textAlign: 'center',
    ...(fullWidth && { width: '100%' }),
  };

  const tableStyle: React.CSSProperties = {
    borderCollapse: 'separate',
    ...(fullWidth && { width: '100%' }),
  };

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      style={tableStyle}
      className={className}
    >
      <tbody>
        <tr>
          <td align={align} valign="middle">
            {/*[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href={`${href}`} style="height:auto;v-text-anchor:middle;width:200px;" arcsize="10%" stroke="f" fillcolor={`${backgroundColor}`}>
              <w:anchorlock/>
              <center>
            <![endif]*/}
            <a href={href} style={buttonStyle} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
            {/*[if mso]>
              </center>
            </v:roundrect>
            <![endif]*/}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
