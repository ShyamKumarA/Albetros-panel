import React, { useEffect, useState } from "react";
import classes from './AddBlog.module.css'
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

export const AddBlog = ({ fetchData, handleClose }) => {

    const [blogData, setBlogData] = useState({
        title: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [sections, setSections] = useState([
        {
            subtitle:'',
            subdescription:''
        }
    ]);

    
    // no of subfilds
    const [subtitleCount, setSubtitleCount] = useState(1);

    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };
    const handleSubTitleChange = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index] = { ...updatedSections[index], subtitle: value };
        setSections(updatedSections);
    };

    const handleSubDescriptionChange = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index] = { ...updatedSections[index], subdescription: value };
        setSections(updatedSections);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };
    console.log(blogData,'blogdata');
    console.log(sections,'sections');
    console.log(selectedFile,'selectedFile');

    const addSubtitleField = () => {
        setSubtitleCount(subtitleCount + 1);
    };
    const submitBlogData = async () => {
        setLoading(true);
        const blog = new FormData();
        // Append blogData fields to formData
        blog.append('title', blogData.title);
        blog.append('description', blogData.description);

        // Append selectedFile to formData
        if (selectedFile) {
            blog.append('blogImage', selectedFile, selectedFile.name);
        }

        // Append subData to formData
        sections.forEach((sub, index) => {
            blog.append(`sections[${index}][subtitle]`, sub.subtitle);
            blog.append(`sections[${index}][subdescription]`, sub.subdescription);
        });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "multipart/form-data",
            }
        };
        try {
            const response = await axios.post('https://app.albetros.com/api/admin/add-blog', blog, config);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Stop loading regardless of success or error
            setBlogData({
                title: '',
                description: '',
            });
            setSections([{
                subtitle: '',
                subdescription: ''
            }]);
            fetchData()
            handleClose()
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
                        <input value={blogData.title} onChange={handleChange} name="title" type="text" placeholder='Heading' />
                        <label htmlFor="">Description</label>
                        <textarea value={blogData.description} onChange={handleChange} name="description" type="text" placeholder='Description' />
                    </div>
                    {/* Render existing subtitle and subDescription fields */}
                    {[...Array(subtitleCount)].map((_, index) => (
                        <div key={index} className={classes.sub_container}>
                            <label htmlFor={`subtitle${index + 1}`}>Subtitle {index + 1}</label>
                            <input onChange={(e) => handleSubTitleChange(index, e.target.value)} name={`subtitle`} type="text" placeholder={`subtitle ${index + 1}`} />
                            <label htmlFor={`subDescription${index + 1}`}>SubDescription {index + 1}</label>
                            <textarea onChange={(e) => handleSubDescriptionChange(index, e.target.value)} name={`subdescription`} type="text" placeholder={`SubDescription ${index + 1}`} />
                        </div>
                    ))}

                    <div className={classes.sub_container}>
                        <button className={classes.addField_btn} onClick={addSubtitleField}>Add Field</button>

                        <label htmlFor="">Blog Image</label>
                        <div className={classes.choose_image}>
                            <input onChange={handleFileChange} name="image" type="file" accept="image/*" />
                        </div>
                    </div>
                    <button onClick={submitBlogData} className={classes.ok_btn}>{loading?"submiting...":'OK'}</button>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
