import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import EditSeo from './EditSeo/EditSeo';

import classes from './Seo.module.css'
import AddSeo from './AddSeo/AddSeo';
const Seo = () => {
    const[seoDatas,setSeoDatas]=useState([])
    const [addSeo, setAddSeo] = useState(false)
    const [editSeo, setEditSeo] = useState(false)

    useEffect(() => {
        fetchSeoData();
    }, [])
    // get all seo datas
    const fetchSeoData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/view-seo');
            console.log(response.data?.seoData);
            setSeoDatas(response.data?.seoData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    // handle seo add modal

    // const OpenAddModal = () => {
    //     setAddSeo(true);
    // }

    // const closeAddModal = () => {
    //     setAddSeo(false);
    // }


    const OpenEditModal = (id) => {
        setEditSeo(true);
    }

    const closeEditModal = () => {
        setEditSeo(false);
    }


    return (
        <div className={classes.seo}>
            <h2 className={classes.analytics_head}>SEO</h2>
            <div className={classes.seo_container} id='blogs'>
               
                <button onClick={OpenEditModal} className={classes.add_button}> Edit</button>
                {seoDatas.map((seo)=>(
                    <div className={classes.table_container}>
                        <h3 style={{ color: "#206a79" }}>Meta Title :</h3>
                        <p>{seo.title}</p><br />
                        <h3 style={{ color: "#206a79" }}>Meta Description :</h3>
                        <p>{seo.description}</p><br />
                        <h3 style={{ color: "#206a79" }}>Meta Keywords :</h3>
                        <p>{seo.keyWords}</p><br />

                        {/* <table>
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Keywords</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {seoDatas.map((seo, index) => (
                                <tr key={seo._id}>
                                    <td>{seo.page}</td>
                                    <td>{seo.title}</td>
                                    <td>{seo.description}</td>
                                    <td>{seo.keyWords}</td>
                                    <td className='action_icons'>
                                        <EditIcon onClick={()=>OpenEditModal(seo._id)} style={{ color: "blue" }} /></td>
                                        <DeleteIcon onClick={() => OpenDeleteModal(blog._id)} style={{ color: "red" }} />
                                </tr>
                            ))}
                           

                        </tbody>

                    </table> */}

                    </div>
                ))}
                

            </div>
            {editSeo && <EditSeo handleClose={closeEditModal} fetchSeoData={fetchSeoData}/>}
            {/* {addSeo && <AddSeo handleClose={closeAddModal} />} */}

        </div>
    )
}

export default Seo