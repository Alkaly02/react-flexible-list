import React, { Fragment } from 'react'
import Skeleton from './Skeleton'
import EmptyList from './EmptyList'

const isReactFC = (element: any): element is React.FC<any> => {
    return typeof element === 'function'
};

interface IgridList {
    isLoading?: Boolean,
    resourceItem: React.FC<any>,
    resourceData: (string | object | number)[],
    loader?: React.ElementType,
    skeleton?: React.ElementType,
    emptyComponent?: React.ElementType,
    gap?: number,
    cardWidth?: number,
    minHeight?: number,
    px?: number,
    py?: number,
    mx?: number,
    my?: number
}

const GridList = ({
    isLoading = false,
    resourceItem,
    resourceData = [],
    loader: Loader,
    skeleton: LoadingSkeleton = Skeleton,
    emptyComponent: EmptyComponent = EmptyList,
    gap = 15,
    cardWidth = 250,
    minHeight = 300,
    px = 10,
    py = 10,
    mx = 0,
    my = 0,
}: IgridList) => {
    const app: React.CSSProperties = {
        minHeight: `${minHeight}px`,
        padding: `${py}px ${px}px`,
        margin: `${my}px ${mx}px`
    }
    const container: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill,minmax(${cardWidth}px,1fr))`,
        gap: gap + 'px',
        overflowY: 'auto',
        margin: 0,
        padding: 0
        // padding: 10
    }

    if (!resourceItem) throw new Error("resourceItem must be specified in GridList")
    // if (!isReactFC(resourceItem)) throw new TypeError("resourceItem must be a React component")

    return (
        <div style={app}>
            {
                isLoading ?
                    Loader ? <Loader /> :
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
                                    return <Fragment key={i}>
                                        {resourceItem(resource)}
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