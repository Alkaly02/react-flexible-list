import React from 'react'

interface IResourceProps {
    resourceData: (string | object | number)[],
    resourceName: string,
    resourceItem: React.FC
}

const ResourceDataMap = ({
    resourceData = [],
    resourceItem: ResourceItem,
    resourceName
}: IResourceProps) => {
    resourceData = Array.isArray(resourceData) ? resourceData : [resourceData]
    return (
        <>
            {
                resourceData.map((resource, i) => (
                    <ResourceItem key={i} {...{ [resourceName]: resource }} />
                ))
            }
        </>
    )
}

export default ResourceDataMap