import React from 'react'
import { Link } from 'react-router-dom'
const TitleBar = () => {
  return (
    <div>
       <div className="title-bar">
            <div className="left">
              <p className="bold">Popular Trailers</p>
              <p className="grey">Action / Adventure</p>
            </div>{" "}
            {/* left */}
            <div className="right">
              <Link className="blue" to="Rating">
                Rating <i className="fa fa-angle-down" />
              </Link>
             <Link to="/Newest">Newest</Link>
             <Link to="/Oldest">Oldest</Link>
            </div>{" "}
            {/* right */}
          </div>{" "}
    </div>
  )
}

export default TitleBar