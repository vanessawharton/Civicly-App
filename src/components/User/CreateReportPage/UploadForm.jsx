import { useState } from "react"
import storage from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Resizer from "react-image-file-resizer";
import { Button, Divider } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


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
            (uri) => {resolve(uri)},
            "file"
            );
        });


    // const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    
    const handleResize = async (file) => {
        try {
            const resizedFile = await resizeFile(file)
            await handleUpload(resizedFile)
        } catch (error) {
            console.log(error);

        }
    }

    const handleChange = (event) => {
        // setFile(event.target.files[0])
        handleResize(event.target.files[0])

    }

    const handleUpload =  resizedFile => {
        if (!resizedFile) {
            alert('Please select a photo to upload');
        }
        // Here is where you select the folder "files" in Firebase that will receive images for ticket photos. 
        // These names must match here and on Firebase. Create the file in firebase with no forward slashes (case-sensitive).
        //                            ~~~V~~~~~V~~~
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
                });
                }
        ); 

    }

    return (
        <>
            <Button
                variant='contained'
                component="label"
                sx={{ display: 'flex', mt: 2, mr: 1, backgroundColor: 'lightgray', color: 'black', borderRadius: 5}}
                >
                    <AddAPhotoIcon sx={{ mr: 1.5 }} />
                    Add Photo
                <input 
                    hidden
                    type="file" 
                    accept="image/*" 
                    onChange={handleChange} />
            </Button>
            <br />
            <Divider />
        </>
    )
}