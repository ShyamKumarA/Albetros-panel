import React, { useEffect, useState } from "react";
import classes from './AddBlog.module.css'
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

export const AddBlog = ({ handleClose }) => {

    const [blogData, setBlogData] = useState({
        title: '',
        description: ''
    });
    const [selectedFile, setSelectedFile] = useState();
    const [sections, setSections] = useState([]);

    const [subTitle, setSubTitle] = useState('');
    const [subDescription, setSubDescription] = useState('');
    
    // no of subfilds
    const [subtitleCount, setSubtitleCount] = useState(1);

    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
    // const handleSubData = (e) => {
    //     e.preventDefault();
    //     setSections((prevSubData) => {
    //         const updatedSubData = [...prevSubData, { subTitle, subDescription }];
    //         return updatedSubData;
    //     });

    //     setSubDescription('');
    //     setSubTitle('');
    // }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };

    // const addSubtitleField = () => {
    //     setSubtitleCount(subtitleCount + 1);
    // };
    const submitBlogData = async()=>{
        // setSections((prevSubData) => {
        //     const updatedSubData = [...prevSubData, { subTitle, subDescription }];
        //     return updatedSubData;
        // });
        const blog = new FormData();
        // Append blogData fields to formData
        blog.append('title', blogData.title);
        blog.append('description', blogData.description);

        // Append selectedFile to formData
        if (selectedFile) {
            blog.append('blogImage', selectedFile,selectedFile.name);
        }

        // Append subData to formData
        // sections.forEach((sub, index) => {
        //     blog.append(`title`, sub.subTitle);
        //     blog.append(`description`, sub.subDescription);
        // });
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "multipart/form-data",  // Correct typo here
            }
        };

        try {
            console.log(blog);
            const response = await axios.post('http://localhost:8080/api/admin/add-blog', blog, config);
            console.log(response);
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className={classes.AddBlogModal}>
            <div className={classes.popup}>
                <h1>Add Blog</h1>
                <div className={classes.popup_closer} onClick={handleClose}><CloseIcon /></div>
                <div className={classes.input_container}>
                    <div className={classes.sub_container}>
                        <label htmlFor="">Title</label>
                        <input onChange={handleChange} name="title" type="text" placeholder='Heading' />
                        <label htmlFor="">Description</label>
                        <textarea onChange={handleChange} name="description" type="text" placeholder='Description' />
                    </div>
                    {/* Render existing subtitle and subDescription fields */}
                    {[...Array(subtitleCount)].map((_, index) => (
                        <div key={index} className={classes.sub_container}>
                            <label htmlFor={`subtitle${index + 1}`}>Subtitle {index + 1}</label>
                            <input onChange={(e) => setSubTitle(e.target.value)} name={`subtitle${index + 1}`} type="text" placeholder={`subtitle ${index + 1}`} />
                            <label htmlFor={`subDescription${index + 1}`}>SubDescription {index + 1}</label>
                            <textarea onChange={(e) => setSubDescription(e.target.value)} name={`subDescription${index + 1}`} type="text" placeholder={`SubDescription ${index + 1}`} />
                            {/* <button onClick={handleSubData}>Submit</button> */}
                        </div>
                    ))}

                    {/* Add new subtitle and subDescription button */}
                    <div className={classes.sub_container}>
                        {/* <button className={classes.addField_btn} onClick={addSubtitleField}>Add Field</button> */}

                        <label htmlFor="">Blog Image</label>
                        <div className={classes.choose_image}>
                            <input onChange={handleFileChange} name="image" type="file" accept="image/*" />
                        </div>
                    </div>
                    <button onClick={submitBlogData} className={classes.ok_btn}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
