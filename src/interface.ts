type Placement = 'top' | 'bottom' | 'left' | 'right';

type RenderItem = (
  item: MacDockItem,
  originNode: React.ReactNode,
) => React.ReactNode;

export interface MacDockItem {
  label: string;
  icon: string;
}

export interface MacDockProps {
  className?: string;
  style?: React.CSSProperties;
  placement?: Placement;
  size?: 'default' | 'small' | number;
  items?: MacDockItem[];
  renderItem?: RenderItem;
  onClick?: (item: MacDockItem) => void;
}
