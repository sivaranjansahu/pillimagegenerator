import React from 'react'

const svgobject = (props) => {

    return (
        <svg width="300" height="120" version="1.1">
            <g>
            <clipPath id="oval-mask"><ellipse cx="150" cy="60" rx="150" ry="60" /></clipPath>
            </g>
           
                <image clipPath="url(#oval-mask)" x="0" y="0" xlinkHref={props.textureUrl} />
           
        </svg>
    )
}

export default svgobject
