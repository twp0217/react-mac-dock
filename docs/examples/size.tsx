/**
 * compact: true
 */

import React from 'react';
import MacDock, { MacDockItem } from '@twp0217/react-mac-dock';
import './index.less';

export default () => {
  const items: MacDockItem[] = [
    {
      label: 'nautilus',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/nautilus.png',
    },
    {
      label: 'opera',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/opera.png',
    },
    {
      label: 'addressbook',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/addressbook.png',
    },
    {
      label: 'dictionary',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/dictionary.png',
    },
    {
      label: 'update',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/update.png',
    },
    {
      label: 'settings',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/settings.png',
    },
    {
      label: 'trash',
      icon: 'https://twp0217.github.io/react-mac-dock/demo/trash.png',
    },
  ];

  return (
    <div className="demo-container">
      <MacDock items={items} placement="top" size={50} />
      <MacDock items={items} size="small" />
    </div>
  );
};
