import React, { useEffect, useState } from 'react'
import Blog from '../Containers/Blog/Blog'
import classes from './Dahboard.module.css'
import CountCard from '../Containers/CountCard/CountCard'
import axios from 'axios'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])
  const [Numberblogs, setNumberblogs] = useState()

  useEffect(() => {

    fetchData();
  }, [])

  // get blog datas
  const fetchData = async () => {
    try {
      const response = await axios.get('https://app.albetros.com/api/admin/view-blogs');
      setBlogs(response.data.blogData)
      setNumberblogs(response.data.blogCount)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className={classes.dashboard}>
      <h2 className={classes.analytics_head}>Dashboard</h2>
      <CountCard Numberblogs={Numberblogs} />
      <h2 className={classes.analytics_head}>Blogs</h2>
      <Blog blogs={blogs} fetchData={fetchData} />
    </div>
  )
}

export default Dashboard