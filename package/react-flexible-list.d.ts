import React from 'react';

declare module 'react-flexible-list' {
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

    const GridList: React.FC<IGridList>;

    export default GridList;
}