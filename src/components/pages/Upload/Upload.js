import React, { useState, useEffect } from 'react'
import ReactFileReader from 'react-file-reader';
// import { csv } from 'd3';
// import { VictoryBar, VictoryChart } from 'Victory'

const Upload = () => {
    const[csvFiles,setCsvFiles] = useState([]);

    const captureFile = e =>
    {
        e.preventDefault()
        // const file =  e.target.files;
        // console.log(e.target.files[0])
        setCsvFiles(e.target.files[0])
        // const reader = new window.FileReader()
        

        // for (let i = 0; i < file.length; i++) 
        // {
            
        //     reader.readAsArrayBuffer(file[i])
        //     reader.onloadend = () =>
        //     {
        //         console.log('buffer: ', Buffer(reader.result) )
        //         setFiles(Buffer(reader.result))
        //     }
        // // }
        // console.log(file)

        // var reader = new FileReader();
        //     reader.onload = function(e) {
        //         // Use reader.result
        //         // alert(reader.result)
        //         // console.log(reader.result)
        //         setFiles(reader.result)
        //     }
        //     reader.readAsText(e[0]);

        // console.log(csvFiles)


        
    }

    // function _base64ToArrayBuffer(base64) {
    //     var binary_string = window.atob(base64);
    //     var len = binary_string.length;
    //     var bytes = new Uint8Array(len);
    //     for (var i = 0; i < len; i++) {
    //         bytes[i] = binary_string.charCodeAt(i);
    //     }
    //     return bytes.buffer;
    // }

    



    return (
        <div>
            <div className="upload__section">
                <h1 className="upload__header">
                    Upload your files
                </h1>

                <div className="upload__container">
                    <div className="upload__container-cardInfo">
                        <div className="icon">
                            <p>Upload</p>
                        </div>

                        <form >
                            <input type="file" accept=".csv,.xlsx,.xls" multiple  onChange={captureFile}/>
                        </form>
                        {/* <ReactFileReader fileTypes={[".csv",".pdf"]} multipleFiles={true} handleFiles={captureFile}>
                            <button className='btn'>Upload</button>
                        </ReactFileReader> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;