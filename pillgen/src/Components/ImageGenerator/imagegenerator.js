import React,{Component} from 'react';
import Svgobject from '../svgobject/svgobject';
import Allshapes from '../svgobject/allshapes'

class ImageGenerator extends Component{
    state={
        url:"/assets/textures/"
    }
    
    render(){
        return(<div>
            
            <Allshapes text={this.props.text} />
            
            
            </div>
        
        
    )
    }
}

const styles={
    imprint:{
        fontWeight:"bold",
        position:"absolute",
        top:0,
        width:"100%",
        height:"100%",
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    svgcontainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",width:"100%",
        height:"100%",
    },
    pillanatomy:{
        position:"relative",
        height:"400px"
    }
}

export default ImageGenerator;