import React from 'react'
import Skeleton from './Skeleton'
import EmptyList from './EmptyList'
import ResourceDataMap from './ResourceDataMap'

interface IgridList {
    isLoading?: Boolean,
    resourceItem: React.FC,
    resourceName: String,
    resourceData: (string | object | number)[],
    skeleton?: React.ElementType,
    emptyComponent?: React.ElementType,
    gap?: number,
    cardWidth?: number
}

const GridList = ({
    isLoading = false,
    resourceItem: ResourceItem,
    resourceName,
    resourceData = [],
    skeleton: LoadingSkeleton = Skeleton,
    emptyComponent: EmptyComponent = EmptyList,
    gap = 15,
    cardWidth = 250,
}: IgridList) => {
    const container: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill,minmax(${cardWidth}px,1fr))`,
        gap: gap + 'px',
        overflowY: 'auto'
    }
    return (
        <>
            {
                isLoading ?
                    <div style={container}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <LoadingSkeleton key={item} />)
                        }
                    </div>
                    :
                    resourceData.length ?
                        <div style={container}>
                            <ResourceDataMap
                                resourceData={resourceData}
                                resourceItem={ResourceItem}
                                resourceName={`${resourceName}`}
                            />
                        </div> :
                        <EmptyComponent />
            }
        </>
    )
}


export default GridList