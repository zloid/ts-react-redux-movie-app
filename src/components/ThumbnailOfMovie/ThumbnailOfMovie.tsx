import React from 'react'
import { Image } from 'react-bootstrap'

export const ThumbnailOfMovie: React.FC<{ thumbnail: string }> = ({
    thumbnail,
}) => {
    return (
        <>
            <Image thumbnail src={thumbnail} width="150" />
        </>
    )
}
