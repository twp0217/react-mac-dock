import classNames from 'classnames';
import React from 'react';
import { MacDockItem, MacDockProps } from './interface';
import './index.less';

const MacDock = (props: MacDockProps) => {
  const {
    className,
    style,
    placement = 'bottom',
    size = 'default',
    items,
    renderItem: customRenderItem,
    onClick,
  } = props;

  const [currentIndex, setCurrentIndex] = React.useState<number>();

  // 大小样式
  const sizeStyle: React.CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
        }
      : {};

  /**
   * 处理鼠标进入事件
   * @param index
   */
  const handleMouseEnter = (index: number): void => {
    setCurrentIndex(index);
  };

  /**
   * 处理鼠标离开事件
   * @returns
   */
  const handleMouseLeave = (): void => {
    setCurrentIndex(undefined);
  };

  /**
   * 渲染每一项
   * @param item
   * @param index
   * @returns
   */
  const renderItem = (item: MacDockItem, index: number): React.ReactNode => {
    const liClassName: string = classNames(
      'mac-dock-item',
      { 'mac-dock-item-small': size === 'small' },
      currentIndex !== undefined
        ? {
            'mac-dock-item-prev-second': currentIndex - 2 === index,
            'mac-dock-item-prev': currentIndex - 1 === index,
            'mac-dock-item-current': currentIndex === index,
            'mac-dock-item-next': currentIndex + 1 === index,
            'mac-dock-item-next-second': currentIndex + 2 === index,
          }
        : null,
    );
    const contentNode: React.ReactNode = <img src={item.icon} />;

    return (
      <li
        className={liClassName}
        style={sizeStyle}
        key={index}
        title={item.label}
        onMouseEnter={() => handleMouseEnter(index)}
        onClick={() => onClick?.(item)}
      >
        {customRenderItem?.(item, contentNode) || contentNode}
      </li>
    );
  };

  /**
   * 渲染所有项
   * @param items
   * @returns
   */
  const renderItems = (items: MacDockItem[]): React.ReactNode => {
    return items.map((item, index) => {
      return renderItem(item, index);
    });
  };

  /**
   * 渲染程序坞
   * @returns
   */
  const renderDock = (): React.ReactNode => {
    if (!Array.isArray(items)) {
      return;
    }
    return (
      <ul className="mac-dock" onMouseLeave={handleMouseLeave}>
        {renderItems(items)}
      </ul>
    );
  };

  return (
    <div
      className={classNames(
        'mac-dock-container',
        `mac-dock-placement-${placement}`,
        className,
      )}
      style={style}
    >
      {renderDock()}
    </div>
  );
};

export default MacDock;
