import React from 'react';

export interface BlockProps {
  /**
   * Content to display inside the block
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Padding (in pixels)
   */
  padding?: number | string;
  /**
   * Maximum width (in pixels)
   * @default 600
   */
  maxWidth?: number;
  /**
   * Horizontal alignment
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * CSS ID
   */
  id?: string;
}

/**
 * Block component - Main container for email content
 * Uses table-based layout for email compatibility
 */
export function Block({
  children,
  backgroundColor,
  color,
  padding = 20,
  maxWidth = 600,
  align = 'center',
  className,
  id,
}: BlockProps) {
  const containerStyle: React.CSSProperties = {
    backgroundColor,
    color,
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: `${maxWidth}px`,
    width: '100%',
  };

  const contentStyle: React.CSSProperties = {
    padding: typeof padding === 'number' ? `${padding}px` : padding,
  };

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={containerStyle}
      className={className}
      id={id}
    >
      <tbody>
        <tr>
          <td align={align} valign="top">
            {/*[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width={`${maxWidth}`}>
              <tr>
                <td align="center" valign="top" width={`${maxWidth}`}>
            <![endif]*/}
            <table
              role="presentation"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              style={innerStyle}
              className="mobile-full-width"
            >
              <tbody>
                <tr>
                  <td style={contentStyle} valign="top">
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
            {/*[if (gte mso 9)|(IE)]>
                </td>
              </tr>
            </table>
            <![endif]*/}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
