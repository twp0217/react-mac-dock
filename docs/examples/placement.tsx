/**
 * compact: true
 */

import React from 'react';
import MacDock, { MacDockItem } from '@twp0217/react-mac-dock';
import './index.less';

export default () => {
  const items: MacDockItem[] = [
    { label: 'nautilus', icon: '/demo/nautilus.png' },
    { label: 'opera', icon: '/demo/opera.png' },
    { label: 'addressbook', icon: '/demo/addressbook.png' },
    { label: 'dictionary', icon: '/demo/dictionary.png' },
    { label: 'update', icon: '/demo/update.png' },
    { label: 'settings', icon: '/demo/settings.png' },
    { label: 'trash', icon: '/demo/trash.png' },
  ];

  return (
    <div className="demo-container">
      <MacDock items={items} placement="top" />
      <MacDock items={items} placement="bottom" />
      <MacDock items={items} placement="left" />
      <MacDock items={items} placement="right" />
    </div>
  );
};
