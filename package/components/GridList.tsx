import React, { Fragment } from 'react'
import Skeleton from './Skeleton'
import EmptyList from './EmptyList'
import ResourceDataMap from './ResourceDataMap'

interface IgridList {
    isLoading?: Boolean,
    resourceItem: React.FC<any>,
    resourceName: String,
    resourceData: (string | object | number)[],
    skeleton?: React.ElementType,
    emptyComponent?: React.ElementType,
    gap?: number,
    cardWidth?: number
}

const GridList = ({
    isLoading = false,
    resourceItem,
    resourceData = [],
    skeleton: LoadingSkeleton = Skeleton,
    emptyComponent: EmptyComponent = EmptyList,
    gap = 15,
    cardWidth = 250,
}: IgridList) => {
    const app: React.CSSProperties = {
        minHeight: "300px",
        padding: 10
    }
    const container: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill,minmax(${cardWidth}px,1fr))`,
        gap: gap + 'px',
        overflowY: 'auto',
        padding: 10
    }
    return (
        <div style={app}>
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
                            {
                                resourceData.map((resource, i) => {
                                    console.log({ fromGrid: resource });

                                    return <Fragment key={i}>
                                        {resourceItem("rendreItem")}
                                    </Fragment>
                                })
                            }
                        </div> :
                        <EmptyComponent />
            }
        </div>
    )
}


export default GridList