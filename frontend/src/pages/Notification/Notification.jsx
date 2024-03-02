import React, { useEffect, useState } from 'react'
import classes from './Notification.module.css'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
const Notification = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [message, setMessage] = useState(false)
    const [notificationImg, setNotificationImg] = useState()
console.log();
    useEffect(() => {
        fetchData()
    }, [])

    // ----- fetch notification -----

    const fetchData = async () => {
        try {
            const response = await axios.get('https://app.albetros.com/api/admin/view-adv-image');
            console.log(response.data.advImage);
            setNotificationImg(response.data.advImage)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // ----- upload notification image -------

    const handleUpload = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data", 
            },
        };

        if (selectedFile) {
            const formData = new FormData();
            formData.append("advImage", selectedFile, selectedFile.name);

            try {
                const response = await axios.post('https://app.albetros.com/api/admin/post-adv-image', formData, config);
                console.log(response);
                fetchData()
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            setMessage(true);
        }
    };

    // -----------------------

    // --- delete notification----
    const DeleteData = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await axios.post('https://app.albetros.com/api/admin/delete-adv-image', {}, config);
            console.log(response.data?.seoData);
            setNotificationImg();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };


    // --------------------

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    };

    return (
        <div className={classes.notification_container}>
            <h2 className={classes.heading}>Notification</h2>

            <div className={classes.image_Container}>
                {notificationImg ? (<><img className={classes.uploaded_img} src={`https://app.albetros.com/uploads/${notificationImg}`} alt="ad" /> <DeleteIcon onClick={DeleteData} className={classes.delete_icon}/> </>) :
                    (<div className={classes.upload_container}>
                        <label htmlFor="imageUpload" className={classes.documentLabel}>
                            Select Document
                        </label>
                        <input type="file" id="imageUpload" className="" onChange={handleImageUpload} accept="image/*" />

                        {selectedFile && <img className={classes.selected_img} src={URL.createObjectURL(selectedFile)} alt="notification" />}
                        {message && <p className={classes.error_message}>select an Image</p>}

                        <div className="">

                            <button
                                type="button"
                                onClick={() => {
                                    handleUpload();
                                }}
                                className={classes.save_btn}
                            >
                                Save
                            </button>

                        </div>
                    </div>)}
            </div>

        </div>
    )
}

export default Notification