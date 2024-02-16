import axios from 'axios';
import AddBlog from '../AddBlog/AddBlog';
import './Blog.css'
import React, { useEffect, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteBlog from '../DeleteBlog/DeleteBlog';
import EditBlog from '../EditBlog/EditBlog';


const Blog = () => {
    const [addBlog, setAddBlog] = useState(false)
    const [editBlog, setEditBlog] = useState(false)
    const [deleteBlog, setDeleteBlog] = useState(false)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        // get blog datas
        const fetchData = async () => {
            try {
                const response = await axios.get('your_api_endpoint_here');
                console.log(response.data);
                setBlogs(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])



    // handle blog add modal
    
    const OpenAddModal = () => {
        setAddBlog(true);
    }

    const closeAddModal = () => {
        setAddBlog(false);
    }

    // handle blog delete modal

    const OpenDeleteModal = () => {
        setDeleteBlog(true);
    }

    const closeDeleteModal = () => {
        setDeleteBlog(false);
    }

    // handle blog delete modal

    const OpenEditModal = () => {
        setEditBlog(true);
    }

    const closeEditModal = () => {
        setEditBlog(false);
    }


    return (
        <>
            <div className='blog-container' id='blogs'>
                <button onClick={OpenAddModal} className='add-button'> Add Blog</button>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>something</td>
                                <td>Description</td>
                                <td className='action_icons'><EditIcon onClick={OpenEditModal} style={{ color: "blue" }} /><DeleteIcon onClick={() => OpenDeleteModal(1)} style={{ color: "red" }} /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>something</td>
                                <td>Description</td>
                                <td><EditIcon style={{ color: "blue" }} /><DeleteIcon style={{ color: "red" }} /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>something</td>
                                <td>Description</td>
                                <td><EditIcon style={{ color: "blue" }} /><DeleteIcon style={{ color: "red" }} /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>something</td>
                                <td>Description</td>
                                <td><EditIcon style={{ color: "blue" }} /><DeleteIcon style={{ color: "red" }} /></td>
                            </tr>
                          
                        </tbody>

                    </table>

                </div>

            </div>
            {addBlog && <AddBlog handleClose={closeAddModal} />}
            {deleteBlog && <DeleteBlog handleClose={closeDeleteModal} />}
            {editBlog && <EditBlog handleClose={closeEditModal} />}

        </>
    )
}

export default Blog