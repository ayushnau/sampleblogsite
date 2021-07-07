import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import './Dropdown/Dropdown.css'

const Introphoto = () => {
    return (
        <div className="backgroundphoto">
            <Dropdown></Dropdown>
            <div className="topcenterphoto">
                
                <img src="https://cdn1.photostockeditor.com/c/2012/person-close-up-photography-of-human-face-black-and-white-black-and-white-image.jpg" className="responsive" alt="" />
    
            </div>

            <div className="centername">
                Aviculanians
            </div>
            <div className="centerphoto">
                <a href="https://google.com">
                    <img src="https://images.pexels.com/photos/3004884/pexels-photo-3004884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mypic" />
                </a>

            </div>

        </div>
    )
}

export default Introphoto
