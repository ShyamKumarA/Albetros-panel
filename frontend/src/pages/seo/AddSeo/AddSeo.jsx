import React, { useEffect, useState } from "react";
import classes from '../EditSeo/EditSeo.module.css'
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

export const AddSeo = ({ fetchData, handleClose }) => {

    const [seoData, setSeoData] = useState({
        page:'',
        title: '',
        description: '',
        keyWords: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setSeoData({ ...seoData, [e.target.name]: e.target.value });
    };

    const submitBlogData = async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await axios.post('https://app.albetros.com/api/admin/add-seo', seoData, config);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Stop loading regardless of success or error
            setSeoData({
                page:'',
                title: '',
                description: '',
                keyWords: ''
            });

            // fetchData()
            handleClose()
        }
    }


    return (
        <div className={classes.AddBlogModal}>
            <div className={classes.popup}>
                <h1>Edit Seo</h1>
                <div className={classes.popup_closer} onClick={handleClose}><CloseIcon /></div>
                <div className={classes.input_container}>
                    <div className={classes.sub_container}>
                        <label htmlFor="">Title</label>
                        <input value={seoData.title} onChange={handleChange} name="title" type="text" placeholder='Heading' />
                        <label htmlFor="">page</label>
                        <input value={seoData.page} onChange={handleChange} name="page" type="text" placeholder='Page' />
                        <label htmlFor="">Description</label>
                        <textarea value={seoData.description} onChange={handleChange} name="description" type="text" placeholder='Description' />
                        <label htmlFor="">keywords</label>
                        <textarea value={seoData.keyWords} onChange={handleChange} name="keyWords" type="text" placeholder='Description' />
                    </div>

                    <button onClick={submitBlogData} className={classes.ok_btn}>{loading ? "submiting..." : 'OK'}</button>
                </div>
            </div>
        </div>
    );
};

export default AddSeo;