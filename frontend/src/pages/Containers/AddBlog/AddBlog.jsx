import React, { useEffect, useState } from "react";
import classes from './AddBlog.module.css'
import CloseIcon from '@mui/icons-material/Close';

export const AddBlog = ({ handleClose }) => {

    const [blogData, setBlogData] = useState({})
    // useEffect(() => {
    //     document.body.classList.add(classes.bodyModalOpen);
    //     return () => {
    //         document.body.classList.remove(classes.bodyModalOpen);
    //     };
    // }, []);

    // take input values
    
    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };

    return (
        <div className={classes.AddBlogModal}>
            <div className={classes.popup}>
                <h1>Add Blog</h1>
                <div className={classes.popup_closer} onClick={handleClose}><CloseIcon /></div>

                <div className={classes.input_container}>
                    {/* <div className={classes.left_section}> */}
                    <label htmlFor="">Title</label>
                    <input onChange={handleChange} name="heading" type="text" placeholder='Heading' />
                    <label htmlFor="">Description</label>
                        <textarea onChange={handleChange} name="description" type="text" placeholder='Description' />
                    {/* </div> */}
                    {/* <div className={classes.right_section}> */}
                    <label htmlFor="">Subtitle 1</label>
                    <input onChange={handleChange} name="subtitle" type="text" placeholder='subtitle' />
                    <label htmlFor="">SubDescription 1</label>
                    <textarea onChange={handleChange} name="SubDescription" type="text" placeholder='SubDescription' />
                    <label htmlFor="">Subtitle 2</label>
                    <input onChange={handleChange} name="subtitle" type="text" placeholder='subtitle' />
                    <label htmlFor="">SubDescription 2</label>
                    <textarea onChange={handleChange} name="SubDescription" type="text" placeholder='SubDescription' />
                    <label htmlFor="">Subtitle 3</label>
                    <input onChange={handleChange} name="subtitle" type="text" placeholder='subtitle' />
                    <label htmlFor="">SubDescription 3</label>
                    <textarea onChange={handleChange} name="SubDescription" type="text" placeholder='SubDescription' />
                    <label htmlFor="">Blog Image</label>
                    <div className={classes.choose_image}>
                    <input onChange={handleChange} name="image" type="file" accept="image/*" />
                    </div>
                    <button className={classes.ok_btn}>OK</button>
                    {/* </div> */}
                </div>
            </div>
        </div>


    );
};
export default AddBlog
