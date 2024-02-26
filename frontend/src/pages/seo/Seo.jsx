import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import EditSeo from './EditSeo/EditSeo';

import classes from './Seo.module.css'
import AddSeo from './AddSeo/AddSeo';
import EditKeywords from './EditSeo/EditKeywords';
const Seo = () => {
    const [seoDatas, setSeoDatas] = useState([])
    const [addSeo, setAddSeo] = useState(false)
    const [editSeo, setEditSeo] = useState(false)
    const [editKeyword, setEditKeyword] = useState(false)

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


    const OpenKeywordModal = (id) => {
        setEditKeyword(true);
    }

    const closeKeywordModal = () => {
        setEditKeyword(false);
    }

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

                <div className={classes.Keywords}>
                    <button onClick={OpenKeywordModal} className={classes.edit_button}>  <EditIcon /></button>

                    <h3> Keywords : <span className={classes.keyword}>shibu inu cryptocurrency - airdrop cryptocurrency - coinbase airdrop - ars coin - Ars token</span></h3>
                </div>
                {/* {seoDatas.map((seo)=>(
                    <div className={classes.table_container}>
                        <h3 style={{ color: "#206a79" }}> Title :</h3>
                        <p>{seo.title}</p><br />
                        <h3 style={{ color: "#206a79" }}> Description :</h3>
                        <p>{seo.description}</p><br />
                        <h3 style={{ color: "#206a79" }}> Keywords :</h3>
                        <p>{seo.keyWords}</p><br /> */}



                {/* </div>
                ))} */}
                <div className={classes.card_container}>
                    <div className={classes.seo_card}>
                        <h3>Home</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>


                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>
                    <div className={classes.seo_card}>
                        <h3>About</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>
                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>
                    <div className={classes.seo_card}>
                        <h3>Blog</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>
                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>
                    <div className={classes.seo_card}>
                        <h3>Article</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>
                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>
                    <div className={classes.seo_card}>
                        <h3>Services</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>
                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>
                    <div className={classes.seo_card}>
                        <h3>SignUp</h3>
                        <button onClick={OpenEditModal} className={classes.edit_button}>  <EditIcon /></button>
                        <h4 style={{ color: "#206a79" }}> Title : <span className={classes.values}>ARS COIN PRICE</span></h4>
                        {/* <p>ARS COIN PRICE</p><br /> */}
                        <h4 style={{ color: "#206a79" }}> Description : <span className={classes.values}>Explore the current ARS Coin price and market trends. Stay updated on the latest
                            ARS Coin value and fluctuations in the crypto currency prices.</span></h4>

                    </div>

                </div>
            </div>
            {editSeo && <EditSeo handleClose={closeEditModal} fetchSeoData={fetchSeoData} />}
            {editKeyword && <EditKeywords handleClose={closeKeywordModal} fetchSeoData={fetchSeoData} />}
            {/* {addSeo && <AddSeo handleClose={closeAddModal} />} */}

        </div>
    )
}

export default Seo