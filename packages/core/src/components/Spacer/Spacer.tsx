import { type CSSProperties } from 'react';

export interface SpacerProps {
  height?: number;
  width?: number;
}

/**
 * Spacer component for adding vertical or horizontal space
 * Uses table-based layout for consistent spacing across email clients
 */
export function Spacer({ height = 20, width }: SpacerProps) {
  const style: CSSProperties = {
    height: height ? `${height}px` : undefined,
    width: width ? `${width}px` : undefined,
    lineHeight: height ? `${height}px` : undefined,
    fontSize: '1px',
  };

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width={width || '100%'}
      style={style}
    >
      <tbody>
        <tr>
          <td style={style}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
