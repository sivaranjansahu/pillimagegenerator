import React from 'react'

import Textcomponent from '../TextComponent/textcomponent'
import Svgshape from '../svgobject/svgobject'



const allshapes = (props) => {

    let rand = Math.floor(Math.random() * 5);
    //let randomTexture=Math.floor(Math.random()*5);
    let randomUrl = "/assets/textures/" + Math.floor(Math.random() * 14) + ".png"
    //randomUrl="/assets/textures/6.png"
    let bgstyle={
        bg:{
            background:'url('+{randomUrl}+')'
        }
    }
    let selectedShape = '';
    
    selectedShape=<Svgshape texture={randomUrl} />

    return (

        <div style={styles.pillanatomy}  id="pillcontainer" >
            <div style={styles.imprint}>
                <Textcomponent text={props.text} />

            </div>

            <div style={styles.svgcontainer}>
                {selectedShape}
            </div>
        </div>

    )
}

const styles = {
    imprint: {
        fontWeight: "bold",
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    svgcontainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center", width: "100%",
        height: "100%",
    },
    pillanatomy: {
        position: "relative",
         height: "160px",
        width:"300px",
        margin:'0 auto'

    }
}

export default allshapes;