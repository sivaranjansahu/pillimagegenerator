import React from 'react'

const svgobject = (props) => {
    console.log(props.style);

    let bgstyle={
        bg:{
            background:'url('+props.texture+')'
        }
    }
    return (
        // <svg width="300" height="120" version="1.1">
        //     <g>
        //         <clipPath id="capsule-mask">
        //             <rect x="1" y="1" width="300" height="120" ry="60" rx="60" />
        //         </clipPath>
        //     </g>
        //     <a xlinkHref="http://www. web-expert.it">
        //         <image clipPath="url(#capsule-mask)"   x="0" y="0"  xlinkHref={props.textureUrl} />
        //     </a>
        // </svg>
        <div style={{...styles.egg,...bgstyle.bg}}></div>

    )
}


const styles = {
    oval: {
        width: '300px',
        height: '120px',
        borderRadius: "100px / 50px",
        //background:'url("https://designshack.net/wp-content/uploads/css-textshadows-12.jpg")'
    },
    egg:{
        width: "136px",
    height: "190px",
    background: "#ffc000",
    display: "block",
    borderRadius: "  60% 60% 40% 40% / 50% 50% 50% 50%"
    }
}

export default svgobject
