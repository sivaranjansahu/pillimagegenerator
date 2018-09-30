import React from 'react'

const textcomponent = (props) => {
    const colors =["#3E606F","#D1DBBD","#151B41","#05AA64","#410202","#bababa","#969DDB"]
    const effects = [
        {
            //engraved
            backgroundClip: "text",
            textShadow: '2px 2px 3px rgba(255, 255, 255, 0.5)'

        }, {
            //engraved 2
            backgroundClip: "text",
            textShadow: "0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)"
        },{
            //engraved 2
            backgroundClip: "text",
            textShadow: "0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)"
        },
        {
            //embossed
            backgroundClip: "text",
            textShadow: "-0px 0px hsla(0,0%,100%,0.0333333333), 0px -0px hsla(0,0%,0%,0.2), -0.5px 0.5px hsla(0,0%,100%,0.0333333333), 0.5px -0.5px hsla(0,0%,0%,0.2), -1px 1px hsla(0,0%,100%,0.0333333333), 1px -1px hsla(0,0%,0%,0.2), -1.5px 1.5px hsla(0,0%,100%,0.0333333333), 1.5px -1.5px hsla(0,0%,0%,0.2), -2px 2px hsla(0,0%,100%,0.0333333333), 2px -2px hsla(0,0%,0%,0.2), 0px 0px 40px hsla(0,0%,100%,0.1)"
        },
        {
            //font1
            backgroundClip: "text",
            textShadow: "-0px 0px hsla(0,0%,0%,0.2), 0px -0px hsla(0,0%,100%,0.2), -0.5px 0.5px hsla(0,0%,0%,0.2), 0.5px -0.5px hsla(0,0%,100%,0.2), -1px 1px hsla(0,0%,0%,0.2), 1px -1px hsla(0,0%,100%,0.2), -1.5px 1.5px hsla(0,0%,0%,0.2), 1.5px -1.5px hsla(0,0%,100%,0.2), 0px 0px 4.5px hsla(0,0%,0%,1)"
        },
        {
            textShadow: "0 1px 0 #ccc,  0 2px 0 #c9c9c9,0 3px 0 #bbb, 0 4px 0 #b9b9b9,0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)"
        }, {
            backgroundClip: "text",
            textShadow: "rgba(255,255,255,0.5) 0px 3px 3px"
        }, {
            textShadow: "2px 8px 6px rgba(0,0,0,0.2),0px -5px 35px rgba(255,255,255,0.3)"
        }
    ]

    const fontStyles = [
        {
            //Bookman
            fontSize: '54px',
            fontFamily: 'Roboto'


        },
        {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Lato'

        },
        {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Montserrat'

        },
        {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Raleway'

        },
        {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Oswald',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Roboto Slab',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Playfair Display',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Quicksand',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Fjalla One',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Lobster',

        }, {
            //Bookman
            fontSize: '36px',
            fontFamily: 'Nanum Myeongjo',

        }
    ]


    //let rand = Math.floor(Math.random()*3);
    let randomStyle = effects[Math.floor(Math.random() * 6)];
    let randomFont = fontStyles[Math.floor(Math.random() * 11)];
    let randomColor = {color:colors[Math.floor(Math.random() * (colors.length))]}
    //randomStyle = effects[1]
    
    return (
        <span id="imprint" style={{ ...styles.color, ...randomStyle, ...randomFont ,...randomColor }}>
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
