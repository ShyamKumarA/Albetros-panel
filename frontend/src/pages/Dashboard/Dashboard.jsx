import React from 'react'
import Blog from '../Containers/Blog/Blog'
import classes from './Dahboard.module.css'
import AddBlog from '../Containers/AddBlog/AddBlog'
import CountCard from '../Containers/CountCard/CountCard'
const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <h2 className={classes.analytics_head}>Analytics Overview</h2>
      <CountCard/>
      <Blog/>
    </div>
  )
}

export default Dashboard