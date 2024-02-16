import React from 'react'
import classes from './CountCard.module.css'
import ArticleIcon from '@mui/icons-material/Article';

const CountCard = () => {
    return (
        <div className={classes.count_card}>
            <div className={classes.icon_container}>
                <ArticleIcon />
            </div>
                <h1>5K</h1>
                <h5>Total Blogs</h5>
        </div>
    )
}

export default CountCard