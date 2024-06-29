import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
      <div className="top-bar">

<div className="profile-box">
  <div className="circle" />
  <span className="arrow fa fa-angle-down" />
</div>

<ul className="top-menu">
  <li className="menu-icon trigger-sidebar-toggle">
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </li>

  <li>
    <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/articles">Articles</Link>
  </li>
  <li className="active">
   <Link to="/movies">Movies &amp; Films</Link>
  </li>
  <li>
    <Link to="/televesion">Television</Link>
  </li>
  <li>
    <Link to="/music">Music</Link>
  </li>
  <li>
    <Link to="/addmovie">Add Movie</Link>
  </li>
  
</ul>

</div>{" "}
{/* top bar */}
<div className="featured-movie">
<img
  className="cover"
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg"
  alt=""
/>
<p className="corner-title">Staff pick</p>
<div className="bottom-bar">
  <div className="title-container">
    <span className="fa fa-play-circle" />
    <b>Non-stop</b> Trailer #1
  </div>
  <div className="right">
    <div className="stars">
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star" />
      <span className="fa fa-star-half-o" />
      <span className="fa fa-star-o" />
    </div>
    <div className="share">
      <icon className="fa fa-share-square" /> Share
    </div>
  </div>{" "}
  {/* right */}
</div>{" "}
{/* bottom bar */}
</div>{" "}
    </div>
  )
}

export default TopBar