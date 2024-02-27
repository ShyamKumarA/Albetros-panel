import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import EditSeo from './EditSeo/EditSeo';

import classes from './Seo.module.css'
import AddSeo from './AddSeo/AddSeo';
import EditKeywords from './EditSeo/EditKeywords';
const Seo = () => {
    const [seoDatas, setSeoDatas] = useState([])
    const[keyword,setKeyword]=useState({})
    const [addSeo, setAddSeo] = useState(false)
    const [pageData,setPageData]=useState()
    const [editSeo, setEditSeo] = useState(false)
    const [editKeyword, setEditKeyword] = useState(false)

    useEffect(() => {
        fetchSeoData();
        fetchSeoKeyword()
    }, [])
    // get all seo datas
    const fetchSeoData = async () => {
        try {
            const response = await axios.get('https://app.albetros.com/api/admin/view-seo');
            console.log(response.data?.seoData);
            setSeoDatas(response.data?.seoData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // get seo keywords
    const fetchSeoKeyword = async () => {
        try {
            const response = await axios.get('https://app.albetros.com/api/admin/view-keywords');
            console.log(response.data?.keywordData);
            setKeyword(response.data?.keywordData)
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


    const OpenKeywordModal = (id) => {
        setEditKeyword(true);
    }

    const closeKeywordModal = () => {
        setEditKeyword(false);
    }

    const OpenEditModal = (data) => {
        setEditSeo(true);
        setPageData(data)
    }

    const closeEditModal = () => {
        setEditSeo(false);
    }


    return (
        <div className={classes.seo}>
            <h2 className={classes.analytics_head}>SEO</h2>
            <div className={classes.seo_container} id='blogs'>

                <div className={classes.Keywords}>
                    <button onClick={OpenKeywordModal} className={classes.edit_button}>  <EditIcon /></button>

                    <h3> Keywords : <span className={classes.keyword}>{keyword?.keyWords}</span></h3>
                </div>
                <div className={classes.card_container}>
                     {seoDatas.map((seo)=>(
                    <div className={classes.seo_card} key={seo?._id}>
                        <h3>{seo?.page}</h3>
                        <button onClick={()=>OpenEditModal(seo)} className={classes.edit_button}>  <EditIcon /></button>


                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>{seo?.title}</span></h4>
                             <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>{seo?.description}</span></h4>

                    </div>
                     ))}
                    

                </div>
            </div>
            {editSeo && <EditSeo handleClose={closeEditModal} fetchSeoData={fetchSeoData} pageData={pageData}/>}
            {editKeyword && <EditKeywords handleClose={closeKeywordModal} keyword={keyword} fetchSeoKeyword={fetchSeoKeyword} />}
            {/* {addSeo && <AddSeo handleClose={closeAddModal} />} */}

        </div>
    )
}

export default Seo