import React, { useState } from 'react'
import axios from "axios";

export default function UploadFile() {


    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleFileInputChange = (event) => {
        // if(setFile == null){
        //   return  setErrorMessage("cant be empty!")
        // }
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("myFile", file);


            const response = await axios.post("http://localhost:3002/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response.data.msg);
            setSuccessMessage(response.data.msg);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.response.data.err);
        }
    };

    return (
        <div className=''>
            <div >
                <input className='btn btn-dark col-3' type="file" onChange={handleFileInputChange} />
                <button className='btn btn-success' onClick={handleFileUpload}>Upload</button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
            </div>
        </div>
    );



}
