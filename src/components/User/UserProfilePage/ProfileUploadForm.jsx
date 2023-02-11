import { useState } from "react"
import storage from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Resizer from "react-image-file-resizer";
import { Button, Input, Divider, Typography, RaisedButton } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from '@mui/material/Box';


export default function ProfileUploadForm ({ profileImage, setProfileImage }) {
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
            await console.log(resizedFile)
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

        // Here is where you select the folder "profile-images" in Firebase that will receive profile images. 
        // These names must match here and on Firebase. Create the file in firebase with no forward slashes (case-sensitive).
        //                            ~~~V~~~~~~~~~~~~~~V~~~
        const storageRef = ref(storage, `/profile-images/${resizedFile.name}`)
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
                    setProfileImage(url)
                    console.log(profileImage);
                });
                }
        ); 

    }

    return (
        <>
            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    variant='contained'
                    component="label"
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, mr: 1, backgroundColor: 'primary', color: 'white', borderRadius: 5}}
                    >
                        <AddAPhotoIcon sx={{ display: 'flex', justifyContent: 'center', mr: 1.5 }} />
                        Add Profile Image
                    <input 
                        hidden
                        type="file" 
                        accept="image/*" 
                        onChange={handleChange} />
                </Button>
                <br />
                <Divider />
                {/* <Button 
                    onClick={handleResize} 
                    variant='contained'
                    sx={{mt: 2, mr: 1, borderRadius: 5, backgroundColor: 'primary', color: 'white' }}
                    >
                    Upload Photo
                </Button>
                <Typography 
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, mr: 1 }}>
                        {percent} % uploaded
                </Typography> */}
            </Box>
        </>
    )
}