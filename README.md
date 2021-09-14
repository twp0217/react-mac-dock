# react-mac-dock - Mac 程序坞

## 使用

```typescript
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
      <MacDock items={items} />
    </div>
  );
};
```

## API

### MacDockItem

| 名称  | 类型             | 默认值 | 说明  |
| ----- | ---------------- | ------ | ----- |
| label | string \| number | -      | key   |
| icon  | number           | -      | label |

### MacDockProps

| 名称       | 类型                                                                | 默认值    | 说明             |
| ---------- | ------------------------------------------------------------------- | --------- | ---------------- |
| className  | string                                                              | -         | 类名             |
| style      | React.CSSProperties                                                 | -         | 样式             |
| placement  | `top` \| `bottom` \| `left` \| `right`                              | `bottom`  | 位置             |
| size       | `default` \| `small` \| number                                      | `default` | 图标大小         |
| items      | MacDockItem[]                                                       | -         | 数据             |
| renderItem | (item: MacDockItem, originNode: React.ReactNode) => React.ReactNode | -         | 自定义渲染列表项 |
| onClick    | (item: MacDockItem) => void                                         | -         | 点击节点时的回调 |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
