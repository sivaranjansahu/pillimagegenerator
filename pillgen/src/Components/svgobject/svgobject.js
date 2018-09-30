import React from 'react'

const svgobject = (props) => {

    let stylesArray = [
        {
            //oval
            width: '300px',
            height: '120px',
            borderRadius: "150px / 60px",
    
        }, {
            //egg
            width: "126px",
            height: "150px",
            background: "#ffc000",
            display: "block",
            borderRadius: "  60% 60% 40% 40% / 50% 50% 50% 50%"
        },{
            //rectangle
            width: "300px",
            height: '120px',
            borderRadius:'20px'
        },{
            //circle
            width: "140px",
            height: '140px',
            borderRadius:'70px'
        },{
            //square
            width: "140px",
            height: '140px',
            borderRadius:'10px'
        }
    ]

    let randomStyle = stylesArray[Math.floor(Math.random() * 5)];
    //console.log(randomStyle);

    let bgstyle = {
        bg: {
            background: 'url(' + props.texture + ')'
        }
    }
    return (
        <div style={{ ...randomStyle, ...bgstyle.bg }}></div>

    )
}




const styles = {
    oval: {
        width: '300px',
        height: '120px',
        borderRadius: "150px / 60px",
        //background:'url("https://designshack.net/wp-content/uploads/css-textshadows-12.jpg")'
    },
    egg: {
        width: "136px",
        height: "190px",
        background: "#ffc000",
        display: "block",
        borderRadius: "  60% 60% 40% 40% / 50% 50% 50% 50%"
    },
    rectangle: {

    },
    capsule: {

    },
    round: {

    }
}

export default svgobject
