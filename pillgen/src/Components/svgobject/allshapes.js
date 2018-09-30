import React from 'react'

// import Roundshape from './roundShape';
// import CapsuleShape from './capsuleShape';
// import RectangularShape from './rectangularShape';
// import OvalShape from './ovalShape';
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
    //console.log(props.shape)
    //rand=1;
    // switch (rand) {
    //     case 1:
    //         selectedShape = <CapsuleShape textureUrl={randomUrl} texture={randomUrl} />
    //         break;
    //     case 2:
    //         selectedShape = <RectangularShape textureUrl={randomUrl} />
    //         break;
    //     case 3:
    //         selectedShape = <Roundshape textureUrl={randomUrl} />
    //         break;
    //     case 4:
    //         selectedShape = <OvalShape textureUrl={randomUrl} />
    //         break;
    //     default:
    //         selectedShape = <Roundshape textureUrl={randomUrl} />
    // }

    selectedShape=<Svgshape texture={randomUrl} />

    return (

        <div style={styles.pillanatomy}  id="pillcontainer">
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
        width:"300px"
    }
}

export default allshapes;