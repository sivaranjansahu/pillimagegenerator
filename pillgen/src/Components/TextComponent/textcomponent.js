import React from 'react'

const textcomponent = (props) => {

    const effects = [
        {
        //engraved
    backgroundClip: "text",
    
    textShadow: '2px 2px 3px rgba(255, 255, 255, 0.5)'
},
    {
        //embossed
        backgroundClip: "text",
        textShadow:"-0px 0px hsla(0,0%,100%,0.0333333333), 0px -0px hsla(0,0%,0%,0.2), -0.5px 0.5px hsla(0,0%,100%,0.0333333333), 0.5px -0.5px hsla(0,0%,0%,0.2), -1px 1px hsla(0,0%,100%,0.0333333333), 1px -1px hsla(0,0%,0%,0.2), -1.5px 1.5px hsla(0,0%,100%,0.0333333333), 1.5px -1.5px hsla(0,0%,0%,0.2), -2px 2px hsla(0,0%,100%,0.0333333333), 2px -2px hsla(0,0%,0%,0.2), 0px 0px 40px hsla(0,0%,100%,0.1)"
    },
    {
        //font1
        backgroundClip: "text",
       textShadow:"-0px 0px hsla(0,0%,0%,0.2), 0px -0px hsla(0,0%,100%,0.2), -0.5px 0.5px hsla(0,0%,0%,0.2), 0.5px -0.5px hsla(0,0%,100%,0.2), -1px 1px hsla(0,0%,0%,0.2), 1px -1px hsla(0,0%,100%,0.2), -1.5px 1.5px hsla(0,0%,0%,0.2), 1.5px -1.5px hsla(0,0%,100%,0.2), 0px 0px 4.5px hsla(0,0%,0%,1)"
    }
]

const fontStyles = [
    {
        //Bookman
        fontSize: '54px',
        fontFamily: 'Special Elite'


    },
    {
        //Bookman
        fontSize: '36px',
        fontFamily: 'Abel'

    },
    {
        //Bookman
        fontSize: '36px',
        fontFamily: 'Abel'

    },
    {
        //Bookman
        fontSize: '36px',
        fontFamily: 'EB Garamond'

    },
    {
        //Bookman
        fontSize: '36px',
        fontFamily: 'EB Garamond',
        fontWeight:'700'

    },
]


//let rand = Math.floor(Math.random()*3);
let randomStyle = effects[Math.floor(Math.random() * 3)];
let randomFont = fontStyles[Math.floor(Math.random() * 4)];

return (
    <span id="imprint" style={{ ...styles.color, ...randomStyle, ...randomFont }}>
        {props.text}
    </span>
)
}

const styles = {

    color: {
        color: "#bababa",
    }
}

export default textcomponent
