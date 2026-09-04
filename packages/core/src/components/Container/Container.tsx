import { type CSSProperties, type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: number;
  backgroundColor?: string;
  padding?: number | string;
  align?: 'left' | 'center' | 'right';
  style?: CSSProperties;
}

/**
 * Container component - lightweight wrapper without MSO conditionals
 * Use Block for full email-safe containers with Outlook support
 */
export function Container({
  children,
  maxWidth = 600,
  backgroundColor,
  padding = 20,
  align = 'center',
  style = {},
}: ContainerProps) {
  const tableStyle: CSSProperties = {
    maxWidth: `${maxWidth}px`,
    width: '100%',
    backgroundColor,
    margin: '0 auto',
    ...style,
  };

  const cellStyle: CSSProperties = {
    padding: typeof padding === 'number' ? `${padding}px` : padding,
  };

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={tableStyle}
      align={align}
    >
      <tbody>
        <tr>
          <td style={cellStyle}>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
