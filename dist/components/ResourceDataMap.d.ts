import React from 'react';
interface IResourceProps {
    resourceData: (string | object | number)[];
    resourceName: string;
    resourceItem: React.FC;
}
declare const ResourceDataMap: ({ resourceData, resourceItem: ResourceItem, resourceName }: IResourceProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceDataMap;
