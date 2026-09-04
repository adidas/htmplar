import { type CSSProperties, type ReactNode } from 'react';

export interface ColumnProps {
  children: ReactNode;
  width?: number | string;
  backgroundColor?: string;
  padding?: number | string;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  style?: CSSProperties;
}

/**
 * Column component for grid layouts
 * Must be used inside a Row component
 * Responsive: stacks on mobile by default
 */
export function Column({
  children,
  width,
  backgroundColor,
  padding = 0,
  align = 'left',
  verticalAlign = 'top',
  style = {},
}: ColumnProps) {
  const cellStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    backgroundColor,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    textAlign: align,
    verticalAlign,
    ...style,
  };

  return (
    <td style={cellStyle} align={align} valign={verticalAlign}>
      {children}
    </td>
  );
}
