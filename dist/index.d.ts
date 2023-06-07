import React from 'react';

export interface IGridList {
  isLoading?: boolean;
  resourceItem: React.FC;
  resourceName: string;
  resourceData: (string | object | number)[];
  skeleton?: React.ElementType;
  emptyComponent?: React.ElementType;
  gap?: number;
  cardWidth?: number;
}



export declare const GridList: React.FC<IGridList>;