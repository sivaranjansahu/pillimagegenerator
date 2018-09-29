import React from 'react'

const svgobject = (props) => {

    return (
        <svg width="300" height="120" version="1.1">
            <g>
            <clipPath id="round-mask"><circle cx="150" cy="60" r="60" /></clipPath>
            </g>
            <a xlinkHref="http://www. web-expert.it">
                <image clipPath="url(#round-mask)"  x="0" y="0"  xlinkHref={props.textureUrl} />
            </a>
        </svg>
    )
}

export default svgobject
