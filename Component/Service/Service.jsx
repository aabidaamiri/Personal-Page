import React from 'react'
import './service.css'
import { FaLaptop } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Service = () => {
  return (
    
    <>
      <section id="service" class="body3">
        <div class="ab">
            <h5>Sevices</h5>
            <h1 class="heading">Services <span>That i can provide for you</span> </h1>
        </div>

        <div class="grid-system">
            <div class="box">
                <div class="three-corner-radius">
                <FaLaptop  className="react-icon" /> 
                </div>
                <h4 class="sub-title">Web Design</h4>
                <p>By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaPenFancy  className="react-icon" /> 
                </div>
                <h4 class="sub-title">Video Editing</h4>
                <p>By understanding of visual composition, color theory, and typography I can create for you engaging title cards, design animated transitions, or choose appropriate background music to match the video's tone</p>
            </div>

            <div class="box">
                <div class="three-corner-radius">
                <FaCode  className="react-icon" />
                </div>
                <h4 class="sub-title">Web Design</h4>
                <p>By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
