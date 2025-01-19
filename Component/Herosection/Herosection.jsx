import React from 'react'
import "./herosection.css"
import photo from "../img/ab.jpg"
import { LuFacebook } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";


const Herosection = () => {
  return (
    <>
      <section class="body" id="home">
        <div class="intro">
            <h4>HELLO, I'M</h4>
            <h1>AABIDA AMIRI</h1>
            <p>A frontend web developer</p>

            <button href="">View My works</button>

            <div class="social-con">
                <div class="line"></div>
                <div class="icons">
                    <h2><LuFacebook/></h2>
                    <h2><LuGithub/></h2>
                    <h2><FaXTwitter/></h2>
                    <h2><SlSocialLinkedin/></h2>
                </div>
            </div>
        </div>

        <div class="photo">
            <img src={photo} alt=""/>
        </div>
    </section>
    </>
  )
}

export default Herosection
