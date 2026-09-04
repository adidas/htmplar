import { type CSSProperties, type ReactNode } from 'react';

export interface RowProps {
  children: ReactNode;
  backgroundColor?: string;
  padding?: number | string;
  style?: CSSProperties;
}

/**
 * Row component for horizontal layout containers
 * Works with Column components to create responsive grid layouts
 */
export function Row({ children, backgroundColor, padding: _padding, style = {} }: RowProps) {
  const tableStyle: CSSProperties = {
    width: '100%',
    backgroundColor,
    ...style,
  };

  // Note: padding is intentionally not used here - Row children (Column) handle their own padding

  return (
    <table
      role="presentation"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={tableStyle}
    >
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  );
}
