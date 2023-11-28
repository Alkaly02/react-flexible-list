import React from 'react';
interface IgridList {
    isLoading?: Boolean;
    resourceItem: React.FC<any>;
    resourceData: (string | object | number)[];
    loader?: React.ElementType;
    skeleton?: React.ElementType;
    emptyComponent?: React.ElementType;
    gap?: number;
    cardWidth?: number;
    minHeight?: number;
    px?: number;
    py?: number;
    mx?: number;
    my?: number;
}
declare const GridList: ({ isLoading, resourceItem, resourceData, loader: Loader, skeleton: LoadingSkeleton, emptyComponent: EmptyComponent, gap, cardWidth, minHeight, px, py, mx, my, }: IgridList) => import("react/jsx-runtime").JSX.Element;
export default GridList;
