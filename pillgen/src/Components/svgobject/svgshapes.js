

import React from 'react'

const shape = (props) => {

  let selectedShape = '';

  switch(props.shape){
    case "capsule":
      selectedShape='<clipPath id="hexagonal-mask"><rect x="1" y="1" width="300" height="120" fill="silver" ry="60" rx="60"/></clipPath>'
      break;
    case "rectangular":
      selectedShape='<clipPath id="hexagonal-mask"><rect x="1" y="1" width="300" height="120" ry="60" rx="60" /></clipPath>'
      break;
    case "round":
      selectedShape='<clipPath id="hexagonal-mask"><circle cx="150" cy="60" r="60" /></clipPath>'
      break;
    case "oval":
      selectedShape='<clipPath id="hexagonal-mask"><ellipse cx="150" cy="60" rx="150" ry="60" /></clipPath>'
      break;
    default:
      selectedShape='<clipPath id="hexagonal-mask"><circle cx="150" cy="60" r="60" /></clipPath>'
  }

let completeSVG = (
  <svg width="300" height="120" version="1.1">
  <g>
  {selectedShape}
  </g>
  <a xlinkHref="http://www. web-expert.it">
                  <image clipPath="url(#hexagonal-mask)" height="500px" width="500px" xlinkHref={props.textureUrl} />
              </a>
          </svg>
)

  return (
    <div dangerouslySetInnerHTML={{__html: completeSVG }} />
  )
}

export default shape;
