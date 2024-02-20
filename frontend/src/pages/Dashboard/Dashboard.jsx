import React, { useEffect, useState } from 'react'
import Blog from '../Containers/Blog/Blog'
import classes from './Dahboard.module.css'
import AddBlog from '../Containers/AddBlog/AddBlog'
import CountCard from '../Containers/CountCard/CountCard'
import axios from 'axios'
const Dashboard = () => {
  const [blogs, setBlogs] = useState([])
  const [Numberblogs, setNumberblogs] = useState()

  useEffect(() => {
    // get blog datas

    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/view-blogs');
      setBlogs(response.data.blogData)
      setNumberblogs(response.data.blogCount)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className={classes.dashboard}>
      {/* <h2 className={classes.analytics_head}>Analytics Overview</h2> */}
      <CountCard Numberblogs={Numberblogs} />
      <Blog blogs={blogs} fetchData={fetchData} />
    </div>
  )
}

export default Dashboard