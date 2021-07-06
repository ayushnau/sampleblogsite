import React from 'react'

const Dropdown = () => {
    return (
        <>
        <span className="circulardiv">
        <i className="fas fa-bars"></i>
        </span>
        <div className="willshow">
          <ul className="togglerlist">
              <li><a href="#"> About me</a></li>
              <li><a href="#"> Blog</a></li>
              <li><a href="#"> Projects</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </div>
        </>
        
    )
}

export default Dropdown
