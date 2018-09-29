import React from 'react'

const svgobject = (props) => {

    const shapes={
        rectangularPill:'<rect x="1" y="1" width="300" height="120" ry="60" rx="60" />',
        ovalPill:'   <ellipse cx="150" cy="60" rx="150" ry="60" />',
        roundPill:'<circle cx="150" cy="60" r="60" />',
        capsule:'<rect x="1" y="1" width="300" height="120" fill="silver" ry="60" rx="60"/>'
    }


    return (
        <svg width="300" height="120" version="1.1">
            <g>
                <clipPath id="hexagonal-mask">
                    <rect x="1" y="1" width="300" height="120" ry="60" rx="60" />
                    {/* {shapes.rectangularPill} */}
                </clipPath>
            </g>
            <a xlinkHref="http://www. web-expert.it">
                <image clipPath="url(#hexagonal-mask)" height="500px" width="500px" xlinkHref={props.textureUrl} />
            </a>
        </svg>
    )
}

export default svgobject
