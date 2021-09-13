import classNames from 'classnames';
import React from 'react';
import { MacDockItem, MacDockProps } from './interface';
import './index.less';

const MacDock = (props: MacDockProps) => {
  const {
    className,
    style,
    placement = 'bottom',
    items,
    renderItem: customRenderItem,
    onClick,
  } = props;

  const [currentIndex, setCurrentIndex] = React.useState<number>();

  const handleMouseEnter = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleMouseLeave = (): void => {
    setCurrentIndex(undefined);
  };

  const renderItem = (item: MacDockItem, index: number): React.ReactNode => {
    const liClassName: string = classNames(
      'mac-dock-item',
      currentIndex != undefined
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
        key={index}
        title={item.label}
        onMouseEnter={() => handleMouseEnter(index)}
        onClick={() => onClick?.(item)}
      >
        {customRenderItem?.(item, contentNode) || contentNode}
      </li>
    );
  };

  const renderItems = (): React.ReactNode => {
    return items.map((item, index) => {
      return renderItem(item, index);
    });
  };

  const renderDock = (): React.ReactNode => {
    return (
      <ul className="mac-dock" onMouseLeave={handleMouseLeave}>
        {renderItems()}
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
