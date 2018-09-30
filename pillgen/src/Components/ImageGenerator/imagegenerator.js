import React, { Component } from 'react';
// import Svgobject from '../svgobject/svgobject';
import Allshapes from '../svgobject/allshapes';
import html2canvas from 'html2canvas';
import axios, { post } from 'axios'




class ImageGenerator extends Component {
    state = {
        url: "/assets/textures/"
    }

    componentDidUpdate() {
        //calculate
        let textBb = document.querySelector('#imprint').getBoundingClientRect();
        let containerBb = document.querySelector('#pillcontainer').getBoundingClientRect();
        let coordinatebj = [
            {

            }
        ]
        let x1 = textBb.left - containerBb.left;
        let y1 = textBb.top - containerBb.top;

        let x2 = x1 + textBb.width;
        let y2 = y1;

        let x3 = x2;
        let y3 = y2 + textBb.height;

        let x4 = x1;
        let y4 = y3;

        let imprintBb = [{ x1, y1 }, { x2, y2 }, { x3, y3 }, { x4, y4 }]
        console.log(textBb);
        console.log(containerBb);
        console.log(imprintBb)
        //print
        html2canvas(document.querySelector('#pillcontainer'), { logging: false }).then(function (canvas) {
            document.body.appendChild(canvas);
            let dataURL = canvas.toDataURL('image/jpg');
            let blob = this.dataURItoBlob(dataURL)
            const url = 'http://localhost:3000/profile';
            const formData = new FormData();
            formData.append('avatar', blob,'image.jpeg')
            formData.append('test',1234)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            post(url, formData, config)
        }.bind(this));


    }

    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: mimeString });
    }

    render() {
        return (<div>

            <Allshapes text={this.props.text} />


        </div>


        )
    }
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
        height: "400px"
    }
}

export default ImageGenerator;