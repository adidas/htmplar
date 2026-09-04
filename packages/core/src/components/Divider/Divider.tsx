import { type CSSProperties } from 'react';

export interface DividerProps {
  color?: string;
  height?: number;
  width?: string | number;
  marginTop?: number;
  marginBottom?: number;
}

/**
 * Divider component for horizontal lines
 * Uses border-top for reliable rendering across email clients
 */
export function Divider({
  color = '#e0e0e0',
  height = 1,
  width = '100%',
  marginTop = 16,
  marginBottom = 16,
}: DividerProps) {
  const containerStyle: CSSProperties = {
    margin: `${marginTop}px 0 ${marginBottom}px 0`,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const dividerStyle: CSSProperties = {
    borderTop: `${height}px solid ${color}`,
    fontSize: '1px',
    lineHeight: '1px',
    margin: 0,
    padding: 0,
  };

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={containerStyle}
    >
      <tbody>
        <tr>
          <td style={dividerStyle}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
