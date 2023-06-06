
import React from 'react'

const Title = ({ title, style }: any) => {
    return (
        <h3 style={{ marginTop: 20, marginBottom: 20, ...style }} >
            {title}
        </h3>
    )
}

export default Title
