import React from 'react';
import type { FC, PropsWithChildren, MouseEventHandler } from 'react';

interface ItemListProps<T> {
  items: T[];
  onItemClick?: MouseEventHandler<HTMLDivElement>;
  renderItem: (item: T) => React.ReactNode;
}

export const ItemList = <T,>({
  items,
  onItemClick,
  renderItem,
}: PropsWithChildren<ItemListProps<T>>): React.ReactNode => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={onItemClick}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};