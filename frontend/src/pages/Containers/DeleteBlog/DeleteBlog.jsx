import React from 'react'
import classes from './DeleteBlog.module.css'
import CloseIcon from '@mui/icons-material/Close';

const DeleteBlog = ({ handleClose }) => {
const handleDelete =()=>{
    console.log("delete blog");
}
    return (
        <div className={classes.AddBlogModal}>
            <div className={classes.popup}>
                <div className={classes.waring_cross}><CloseIcon /></div>
                <h1>Are you sure?</h1>
                <div className={classes.popup_closer} onClick={handleClose}><CloseIcon /></div>

                <p>You won't be able to revert this! </p>
                <div className={classes.confirm_btns}>
                    <button onClick={handleClose} className={classes.cancel_btn}>Cancel</button>
                    <button onClick={handleDelete} className={classes.delete_btn}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBlog