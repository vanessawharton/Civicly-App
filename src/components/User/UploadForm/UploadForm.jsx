import { useState } from "react"
import storage from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Resizer from "react-image-file-resizer";
import { Button } from "@mui/material";


export default function UploadForm ({ newReport, setNewReport }) {
    // image resizer
    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            75,
            0,
            (uri) => {
                resolve(uri);
            },
            "blob"
            );
        });




    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    
    const handleResize = async () => {
        try {
            const resizedFile = await resizeFile(file)
            console.log(resizedFile)
            handleUpload(resizedFile)
        } catch (error) {
            console.log(error);

        }
    }

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleUpload =  resizedFile => {
        if (!resizedFile) {
            alert('Please select a photo to upload');
        }
        const storageRef = ref(storage, `/files/${resizedFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, resizedFile);


        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            
            // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setNewReport({...newReport, imageUrl: url})
                    console.log(newReport);
                });
                }
        ); 

    }

    return (
        <>
            <input type="file" accept="image/*" onChange={handleChange} />
            <Button onClick={handleResize}>Upload</Button>
            <p>{percent} % uploaded</p>
        </>

        
    )
}