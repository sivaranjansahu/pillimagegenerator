import React from 'react'

const svgobject = (props) => {

    return (
        <svg width="300" height="120" version="1.1">
            <g>
                <clipPath id="capsule-mask">
                    <rect x="1" y="1" width="300" height="120" ry="60" rx="60" />
                </clipPath>
            </g>
            <a xlinkHref="http://www. web-expert.it">
                <image clipPath="url(#capsule-mask)"  x="0" y="0"  xlinkHref={props.textureUrl} />
            </a>
        </svg>
    )
}

export default svgobject
